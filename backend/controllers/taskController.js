<<<<<<< HEAD
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
=======
const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create({
    userId: req.user.id,
    text: req.body.text
  });

  res.json(task);
};

exports.updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );

  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac
