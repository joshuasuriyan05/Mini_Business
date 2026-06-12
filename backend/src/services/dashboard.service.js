const { prisma } = require('../lib/prisma');

async function getDashboardStats() {
  const products = await prisma.product.count({
    where: { isActive: true },
  });

  const customers = await prisma.customer.count({
    where: { isActive: true },
  });

  const salesOrders = await prisma.salesOrder.count();

  return {
    products,
    customers,
    salesOrders,
  };
}

module.exports = {
  getDashboardStats,
};