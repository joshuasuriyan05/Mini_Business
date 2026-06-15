import { handleResponse } from './httpClient';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export async function getStockMovements() {
    const response = await fetch(
        `${API_BASE_URL}/stock-movements`
    );
    return handleResponse(response);
}