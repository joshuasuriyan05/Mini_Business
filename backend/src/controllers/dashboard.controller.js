const dashboardService = require('../services/dashboard.service');

async function getDashboardStats(req, res, next) {
  try {
    const stats = await dashboardService.getDashboardStats();

    res.json(stats);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDashboardStats,
};