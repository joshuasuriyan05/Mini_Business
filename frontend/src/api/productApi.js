import { handleResponse } from './httpClient';
import { getAuthHeaders } from './authHeaders';

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'https://mini-business-1.onrender.com/api';

export async function getProducts() {
    const response = await fetch(
        `${API_BASE_URL}/products`,
        {
            headers: getAuthHeaders(),
        }
    );

    return handleResponse(response);
}

export async function getProductById(productId) {
    const response = await fetch(
        `${API_BASE_URL}/products/${productId}`,
        {
            headers: getAuthHeaders(),
        }
    );

    return handleResponse(response);
}

export async function createProduct(productData) {
    const response = await fetch(
        `${API_BASE_URL}/products`,
        {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(productData),
        }
    );

    return handleResponse(response);
}

export async function updateProduct(
    productId,
    productData
) {
    const response = await fetch(
        `${API_BASE_URL}/products/${productId}`,
        {
            method: 'PATCH',
            headers: getAuthHeaders(),
            body: JSON.stringify(productData),
        }
    );

    return handleResponse(response);
}

export async function deleteProduct(productId) {
    const response = await fetch(
        `${API_BASE_URL}/products/${productId}`,
        {
            method: 'DELETE',
            headers: getAuthHeaders(),
        }
    );

    if (response.status === 204) {
        return null;
    }

    return handleResponse(response);
}