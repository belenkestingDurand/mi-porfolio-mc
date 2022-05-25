const { Router } = require('express')
const express = require('express')
const mainController = require('../controllers/mainControllers')
const router = express.Router()
router.get('/', mainController.index)
router.get('/about', mainController.about)

module.exports = router