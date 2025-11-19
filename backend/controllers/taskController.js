const Task = require('../models/Task');


exports.createTask = async (req, res) => {
try {
const { title, description } = req.body;
if (!title) return res.status(400).json({ message: 'Title required' });
const task = await Task.create({ title, description, user: req.user?.id });
res.status(201).json(task);
} catch (err) {
console.error(err); res.status(500).json({ message: 'Server error' });
}
};


exports.getTasks = async (req, res) => {
try {
const tasks = await Task.find(req.user ? { user: req.user.id } : {}).sort('-createdAt');
res.json(tasks);
} catch (err) {
console.error(err); res.status(500).json({ message: 'Server error' });
}
};


exports.getTask = async (req, res) => {
try {
const task = await Task.findById(req.params.id);
if (!task) return res.status(404).json({ message: 'Task not found' });
res.json(task);
} catch (err) {
console.error(err); res.status(500).json({ message: 'Server error' });
}
};


exports.updateTask = async (req, res) => {
try {
const updates = req.body;
const task = await Task.findByIdAndUpdate(req.params.id, updates, { new: true });
if (!task) return res.status(404).json({ message: 'Task not found' });
res.json(task);
} catch (err) {
console.error(err); res.status(500).json({ message: 'Server error' });
}
};


exports.deleteTask = async (req, res) => {
try {
const task = await Task.findByIdAndDelete(req.params.id);
if (!task) return res.status(404).json({ message: 'Task not found' });
res.json({ message: 'Task removed' });
} catch (err) {
console.error(err); res.status(500).json({ message: 'Server error' });
}
};