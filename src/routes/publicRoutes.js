const { Router } = require('express')

const SessionController = require('../controllers/SessionController')
const SessionValidations = require('../controllers/SessionValidations')
const publicRoutes = new Router()

publicRoutes.get('/session', SessionValidations.index, SessionController.index)

module.exports = publicRoutes
