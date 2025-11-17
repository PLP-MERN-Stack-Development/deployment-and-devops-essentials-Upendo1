const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
const authHeader = req.header('Authorization') || req.header('authorization');
const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
if (!token) return res.status(401).json({ message: 'No token provided' });
try {
const decoded = jwt.verify(token, process.env.JWT_SECRET || 'devsecret');
req.user = { id: decoded.id };
next();
} catch (err) {
console.error(err);
res.status(403).json({ message: 'Invalid token' });
}
};