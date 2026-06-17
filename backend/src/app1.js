const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');
const customerRoutes = require('./routes/customer.routes');
const salesOrderRoutes = require('./routes/salesOrder.routes');
const stockMovementRoutes = require('./routes/stockMovement.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(
    cors({
        origin: [
            'http://localhost:5173',
            'https://mini-business-mu.vercel.app'
        ],
        credentials: true
    })
);

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Mini Business API Running'
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'ok'
    });
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/sales-orders', salesOrderRoutes);
app.use('/api/stock-movements', stockMovementRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: `Route not found: ${req.originalUrl}`
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(err.statusCode || 500).json({
        message: err.message || 'Internal server error'
    });
});

module.exports = app;