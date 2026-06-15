const stockMovementService = require( '../services/stockMovement.service');

async function getStockMovements(req, res, next) {
    try {
        const movements =
            await stockMovementService.getStockMovements();        res.status(200).json(movements);
    } catch (error) {
        next(error);
    }
}
module.exports = { getStockMovements, };