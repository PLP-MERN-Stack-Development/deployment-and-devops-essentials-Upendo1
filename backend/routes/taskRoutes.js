<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');


// If you want auth-protected routes, keep auth middleware; for demo you can omit it on read.
router.get('/', auth, taskController.getTasks);
router.post('/', auth, taskController.createTask);
router.get('/:id', auth, taskController.getTask);
router.put('/:id', auth, taskController.updateTask);
router.delete('/:id', auth, taskController.deleteTask);


module.exports = router;
=======
const express = require("express");
const auth = require("../middleware/auth");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", auth, getTasks);
router.post("/", auth, createTask);
router.patch("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;
>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac
