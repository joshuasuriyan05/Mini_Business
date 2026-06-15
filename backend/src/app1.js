const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');
const customerRoutes = require('./routes/customer.routes');
const salesOrderRoutes = require('./routes/salesOrder.routes');
const dashboardRoutes = require('./routes/dashboard.routes');
const stockMovementRoutes = require('./routes/stockMovement.routes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/api/products', productRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/sales-orders', salesOrderRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/stock-movements', stockMovementRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;