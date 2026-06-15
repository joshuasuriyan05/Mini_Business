const { prisma } = require('../lib/prisma');
const { createAppError } = require('../utils/appError');
const { calculateLineTotal, calculateOrderTotal, } = require('../utils/salesOrderCalculations');

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
function validateOrderInput(data) {
  if (!data.customerId) {
    throw createAppError('Customer is required');
  }
  if (!Array.isArray(data.items) || data.items.length === 0) {
    throw createAppError('Order must have at least one item');
  }
  for (const item of data.items) {
    if (!item.productId) {
      throw createAppError('Product is required');
    }
    if (Number(item.quantity) <= 0) {
      throw createAppError('Quantity must be greater than zero');
    }
    if (Number(item.rate) <= 0) {
      throw createAppError('Rate must be greater than zero');
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
    throw createAppError('Customer not found', 404);
  }
  const productIds = data.items.map((item) =>
    Number(item.productId)
  );
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });
  const foundIds = new Set(products.map((p) => p.id));
  for (const id of productIds) {
    if (!foundIds.has(id)) {
      throw createAppError('One or more products are invalid', 400);
    }
  }
  const orderItems = data.items.map((item) => ({
    productId: Number(item.productId),
    quantity: Number(item.quantity),
    unitPrice: Number(item.rate),
    totalPrice: calculateLineTotal(
      item.quantity,
      item.rate
    ),
  }));
  const totalAmount = calculateOrderTotal(
    data.items.map((item) => ({
      quantity: Number(item.quantity),
      rate: Number(item.rate),
    }))
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
      throw createAppError('Sales order not found', 404);
    }
    if (order.status !== 'DRAFT') {
      throw createAppError('Only draft orders can be confirmed', 400);
    }
    for (const item of order.items) {
      if (!item.product) {
        throw createAppError(`Product ${item.productId} not found`, 404);
      }
      if (item.product.stockQty <= 0) {
        throw createAppError(`${item.product.name} is out of stock`, 400);
      }
      if (item.quantity > item.product.stockQty) {
        throw createAppError(
          `Insufficient stock for ${item.product.name}. Available: ${item.product.stockQty}`,
          400
        );
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
module.exports = { getSalesOrders, getSalesOrderById, createSalesOrder, confirmSalesOrder,};