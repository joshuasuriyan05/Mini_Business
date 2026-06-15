export function formatMovementDate(date) {
    return new Date(date).toLocaleString();
}
export function getMovementBadge(type) {
    if (type === 'OUT') {
        return 'bg-red-700 font-bold text-white';
    }
    return 'bg-green-700 font-bold text-white';
}