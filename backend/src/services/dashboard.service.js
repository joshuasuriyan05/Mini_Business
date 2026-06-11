const { prisma } = require('../lib/prisma');

async function getDashboardStats() {
  const products = await prisma.product.count();
  const customers = await prisma.customer.count();
  const salesOrders = await prisma.salesOrder.count();
  return {
    products,customers,salesOrders,};
}