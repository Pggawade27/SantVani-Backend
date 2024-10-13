const express = require('express')
const register = require('../controllers/User-Controller')

const routes = express.Router()

routes.post('/register', register)

module.exports = routes