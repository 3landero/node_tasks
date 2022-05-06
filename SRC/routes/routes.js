const express = require('express')
const router = express.Router()
const taskController = require('../controllers/tasksControllers')
const userController = require('../controllers/usersControllers')

module.exports = function() {
    router.get('/api/v1/tasks/', taskController.getAllTasks);
    router.get('/api/v1/task/:id', taskController.getTaskById);
    router.get('/api/v1/users/', userController.getAllUsers);
    router.get('/api/v1/user/:id', userController.getUserById);
    return router
}
