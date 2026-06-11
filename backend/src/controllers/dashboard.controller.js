const { prisma } = require('../lib/prisma');

async function getDashboardStats(req, res, next) {
  try {
    const products = await prisma.product.count({
      where: { isActive: true },
    });

    const customers = await prisma.customer.count({
      where: { isActive: true },
    });

    const salesOrders = await prisma.salesOrder.count();

    res.json({
      products,
      customers,
      salesOrders,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDashboardStats,
};