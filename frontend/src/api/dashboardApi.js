import api from './axios';

export async function getDashboardCounts() {
  const [products, customers, salesOrders] = await Promise.all([
    api.get('/products'),
    api.get('/customers'),
    api.get('/sales-orders'),
  ]);
  return {
    products: products.data.length,
    customers: customers.data.length,
    salesOrders: salesOrders.data.length,
  };
}