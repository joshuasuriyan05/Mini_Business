const express = require('express');
const router = express.Router();

const {
    register,
    login,
} = require('../controllers/auth.controller');

// Register user
router.post('/register', register);

// Login user
router.post('/login', login);

// Optional health check route
router.get('/', (req, res) => {
    res.json({
        message: 'Auth API is working',
    });
});

module.exports = router;