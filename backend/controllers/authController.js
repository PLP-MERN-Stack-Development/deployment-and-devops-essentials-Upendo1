<<<<<<< HEAD
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
=======
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: hashed
  });

  res.json({ message: "User registered" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Incorrect password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });

  res.json({ token, user: { id: user._id, name: user.name } });
};
>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac
