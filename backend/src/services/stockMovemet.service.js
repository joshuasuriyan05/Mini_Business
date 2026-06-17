const { prisma } = require('../lib/prisma');
const { createAppError } = require('../utils/appError');

async function getStockMovements() {
    try {
        return await prisma.stockMovement.findMany({
            include: {
                product: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    } catch (error) {
        throw createAppError('Failed to fetch stock movements',500);
    }
}
module.exports = { getStockMovements,};