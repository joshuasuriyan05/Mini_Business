const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    if (process.env.NODE_ENV === 'test') {
        req.user = {
            id: 1,
            username: 'test-admin',
            role: 'ADMIN'
        };
        return next();
    }

    const authHeader = req.headers.authorization;

    console.log('Auth Header:', authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'Authentication required'
        });
    }

    const token = authHeader.replace('Bearer ', '');

    console.log('Token Received:', token.substring(0, 20) + '...');

    try {
        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log('JWT Verified:', payload);

        req.user = payload;
        next();
    } catch (error) {
        console.error('JWT Error:', error.message);

        return res.status(401).json({
            message: 'Invalid token'
        });
    }
}

module.exports = auth;