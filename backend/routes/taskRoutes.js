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