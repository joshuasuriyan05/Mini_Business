import { handleResponse } from './httpClient';
import { getAuthHeaders } from './authHeaders';

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'https://mini-business-1.onrender.com/api/api';

export async function getStockMovements() {
    const response = await fetch(
        `${API_BASE_URL}/stock-movements`,
        {
            headers: getAuthHeaders(),
        }
    );

    return handleResponse(response);
}