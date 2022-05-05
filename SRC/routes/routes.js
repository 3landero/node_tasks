const express = requires('express')
const router = express.Router()
const taskController = require('./SRC/controllers/tasksControllers')
const userController = require('./SRC/controllers/usersControllers')


module.exports = function() {
    router.get('/tasks/', taskController.getAllTasks);
    router.get('/task/:id', taskController.getTaskById);
    router.get('/users/', userController.getAllUsers);
    router.get('/user/:id', userController.getUserById);
    return router
}
