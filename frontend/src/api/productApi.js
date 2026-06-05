const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
async function handleResponse(response) {
    const data = await response.json().catch(() => null);
    if (!response.ok) {
        throw new Error(data?.message || 'Request failed');
    }
    return data;
}
export async function getProducts() {
    const response = await fetch(`${API_BASE_URL}/api/products`);
    return handleResponse(response);
}
export async function getProductById(productId) {
    const response = await fetch(
        `${API_BASE_URL}/api/products/${productId}`
    );
    return handleResponse(response);
}
export async function createProduct(productData) {
    const response = await fetch(`${API_BASE_URL}/api/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    });
    return handleResponse(response);
}
export async function updateProduct(productId, productData) {
    const response = await fetch(
        `${API_BASE_URL}/api/products/${productId}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        }
    );
    return handleResponse(response);
}
export async function deleteProduct(productId) {
    const response = await fetch(
        `${API_BASE_URL}/api/products/${productId}`,
        {
            method: 'DELETE'
        }
    );
    if (response.status === 204) {
        return null;
    }
    return handleResponse(response);
}