const { prisma } = require('../lib/prisma');
async function getSalesOrders() {
  return prisma.salesOrder.findMany({
    include: {
      customer: true,
      items: true,
    },
    orderBy: {
      id: 'desc',
    },
  });
}
async function getSalesOrderById(id) {
  return prisma.salesOrder.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      customer: true,
      items: {
        include: {
          product: true,
        },
      },
    },
  });
}
function createError(message, statusCode = 400) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}
function calculateLineTotal(quantity, rate) {
  return Number(quantity) * Number(rate);
}
function validateOrderInput(data) {
  if (!data.customerId) {
    throw createError('Customer is required');
  }
  if (!Array.isArray(data.items) || data.items.length === 0) {
    throw createError('Order must have at least one item');
  }
  for (const item of data.items) {
    if (!item.productId) {
      throw createError('Product is required');
    }
    if (Number(item.quantity) <= 0) {
      throw createError('Quantity must be greater than zero');
    }
    if (Number(item.rate) <= 0) {
      throw createError('Rate must be greater than zero');
    }
  }
}
async function generateOrderNo() {
  const count = await prisma.salesOrder.count();
  return `SO-${String(count + 1).padStart(4, '0')}`;
}
async function createSalesOrder(data) {
  validateOrderInput(data);
  const customer = await prisma.customer.findUnique({
    where: {
      id: Number(data.customerId),
    },
  });
  if (!customer) {
    throw createError('Customer not found', 404);
  }
  const productIds = data.items.map(item =>
    Number(item.productId)
  );
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });
  const foundIds = new Set(products.map(p => p.id));
  for (const id of productIds) {
    if (!foundIds.has(id)) {
      throw createError('One or more products are invalid');
    }
  }
  const orderItems = data.items.map(item => {
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
    (sum, item) => sum + item.totalPrice,
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
    include: {
      customer: true,
      items: true,
    },
  });
}
async function confirmSalesOrder(id) {
  return prisma.$transaction(async (tx) => {
    const order = await tx.salesOrder.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
    if (!order) {
      throw createError('Sales order not found', 404);
    }
    if (order.status !== 'DRAFT') {
      throw createError('Only draft orders can be confirmed',400);
    }
    for (const item of order.items) {
      if (!item.product) {
        throw createError(`Product ${item.productId} not found`,404);
      }
      if (item.product.stockQty <= 0) {
        throw createError(`${item.product.name} is out of stock`,400
        );
      }
      if (item.quantity > item.product.stockQty) {
        throw createError(`Insufficient stock for ${item.product.name}. Available: ${item.product.stockQty}`,400);
      }
    }
    for (const item of order.items) {
      await tx.product.update({
        where: {
          id: item.productId,
        },
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
    const updatedOrder = await tx.salesOrder.update({
      where: {
        id: order.id,
      },
      data: {
        status: 'CONFIRMED',
      },
      include: {
        customer: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
    return updatedOrder;
  });
}
module.exports = { getSalesOrders, getSalesOrderById, createSalesOrder, confirmSalesOrder, calculateLineTotal,};