const prisma = require('../lib/prisma');

/* ---------------- READ FUNCTIONS ---------------- */

async function getSalesOrders() {
  return prisma.salesOrder.findMany({
    orderBy: { id: 'desc' },
  });
}

async function getSalesOrderById(id) {
  return prisma.salesOrder.findUnique({
    where: { id: Number(id) },
  });
}

/* ---------------- HELPERS ---------------- */

function calculateLineTotal(quantity, rate) {
  return Number(quantity) * Number(rate);
}

function validateOrderInput(data) {
  if (!data.customerId) {
    throw new Error('Customer is required');
  }

  if (!Array.isArray(data.items) || data.items.length === 0) {
    throw new Error('Order must have at least one item');
  }

  for (const item of data.items) {
    if (!item.productId) {
      throw new Error('Product is required');
    }
    if (Number(item.quantity) <= 0) {
      throw new Error('Quantity must be greater than zero');
    }
    if (Number(item.rate) <= 0) {
      throw new Error('Rate must be greater than zero');
    }
  }
}

async function generateOrderNo() {
  const count = await prisma.salesOrder.count();
  return `SO-${String(count + 1).padStart(4, '0')}`;
}

/* ---------------- CREATE ORDER ---------------- */

async function createSalesOrder(data) {
  validateOrderInput(data);

  const customer = await prisma.customer.findUnique({
    where: { id: Number(data.customerId) },
  });

  if (!customer) {
    throw new Error('Customer not found');
  }

  const productIds = data.items.map((i) => Number(i.productId));

  const products = await prisma.product.findMany({
    where: { id: { in: productIds } },
  });

  const foundIds = new Set(products.map((p) => p.id));

  for (const id of productIds) {
    if (!foundIds.has(id)) {
      throw new Error('One or more products are invalid');
    }
  }

  const orderItems = data.items.map((item) => {
    const quantity = Number(item.quantity);
    const rate = Number(item.rate);

    return {
      productId: Number(item.productId),
      quantity,
      unitPrice: rate,
      totalPrice: calculateLineTotal(quantity, rate),
    };
  });

  const totalAmount = orderItems.reduce(
    (sum, i) => sum + i.totalPrice,
    0
  );

  const orderNo = await generateOrderNo();

  return prisma.salesOrder.create({
    data: {
      orderNo,
      customerId: Number(data.customerId),
      status: 'DRAFT',
      totalAmount,
      items: {
        create: orderItems,
      },
    },
  });
}

/* ---------------- CONFIRM ORDER ---------------- */
async function confirmSalesOrder(id) {
  return prisma.$transaction(async (tx) => {
    const order = await tx.salesOrder.findUnique({
      where: { id: Number(id) },
      include: {
        items: {
          include: { product: true },
        },
      },
    });

    if (!order) {
      throw new Error('Sales order not found');
    }

    if (order.status !== 'DRAFT') {
      throw new Error('Only draft orders can be confirmed');
    }

    for (const item of order.items) {
      if (item.product.stockQty < item.quantity) {
        throw new Error('Insufficient stock');
      }
    }

    // ✅ MATCH TEST: updateMany
    for (const item of order.items) {
      await tx.product.updateMany({
        where: { id: item.productId },
        data: {
          stockQty: {
            decrement: item.quantity,
          },
        },
      });

      await tx.stockMovement.create({
        data: {
          productId: item.productId,
          movementType: 'OUT',
          quantity: item.quantity,
          referenceType: 'SALES_ORDER',
          referenceId: order.id,
        },
      });
    }

    await tx.salesOrder.updateMany({
      where: { id: order.id },
      data: { status: 'CONFIRMED' },
    });

    // return final state
    return {
      ...order,
      status: 'CONFIRMED',
    };
  });
}
/* ---------------- EXPORT ---------------- */

module.exports = {
  getSalesOrders,
  getSalesOrderById,
  createSalesOrder,
  calculateLineTotal,
  confirmSalesOrder,
};