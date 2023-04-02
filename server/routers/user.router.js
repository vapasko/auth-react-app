const Router = require('express')
const userController = require('../controllers/user.controller')

const userRouter = new Router()

userRouter.post('/users', userController.setUser)
userRouter.get('/users', userController.getAllUsers)
userRouter.get('/users/:id', userController.getOneUser)
userRouter.put('/users', userController.putAllUsers)
userRouter.delete('/users/:id', userController.deleteUser)

module.exports = userRouter