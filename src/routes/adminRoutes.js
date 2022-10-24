const { Router } = require('express')
const adminAuth = require('../controllers/adminAuth')
const AdminController = require('../controllers/AdminController')

const adminRoutes = new Router()
adminRoutes.use(adminAuth)
adminRoutes.get('/admin', AdminController.index)

module.exports = adminRoutes
