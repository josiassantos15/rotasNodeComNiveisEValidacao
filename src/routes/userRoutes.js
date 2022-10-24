const { Router } = require('express')
const userAuth = require('../middlewares/userAuth')
const UserController = require('../controllers/UserController')

const userRoutes = new Router()

userRoutes.use.userAuth
userRoutes.get('/user', userAuth.index, UserController.index)

module.exports = userRoutes
