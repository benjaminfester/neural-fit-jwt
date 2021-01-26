const express = require('express')
const user = require('../controllers/UserController')
var multer  = require('multer');
const router = express.Router()

const { authMiddleware } = require('../controllers/UserController')

router.post('/register', user.register)

router.post('/login', user.login)

router.get('/index', authMiddleware, (req, res) => {
  res.json({ 'access': true })
})

module.exports = router


