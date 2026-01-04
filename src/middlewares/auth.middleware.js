const {verifyToken} = require('../modules/utils/jwt');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = verifyToken(token);
        req.user = { id: decoded.userId };
        next();
    } catch (err) {
       return  res.status(401).json({ message: 'Invalid token' });
    }
}
module.exports = authMiddleware;