import { handleResponse } from './httpClient';

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
export async function getSalesOrders() {
    const response = await fetch(
        `${API_BASE_URL}/sales-orders`
    );
    return handleResponse(response);
}
export async function getSalesOrderById(id) {
    const response = await fetch(
        `${API_BASE_URL}/sales-orders/${id}`
    );
    return handleResponse(response);
}
export async function createSalesOrder(orderData) {
    const response = await fetch(
        `${API_BASE_URL}/sales-orders`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        }
    );
    return handleResponse(response);
}
export async function confirmSalesOrder(id) {
    const response = await fetch(
        `${API_BASE_URL}/sales-orders/${id}/confirm`,
        {
            method: 'POST',
        }
    );

    return handleResponse(response);
}