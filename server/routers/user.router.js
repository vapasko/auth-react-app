const Router = require('express')
const userController = require('../controllers/user.controller')

const router = new Router()

router.post('/users', userController.setUser)
router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getOneUser)
router.put('/users', userController.putAllUsers)
router.delete('/users/:id', userController.deleteUser)

module.exports = router