const express = require('express')
const router = express.Router()

module.exports = router

const validator = require('../public/javascript/validator')

//XSS low controller and router
const xss_low_controller = require('../controllers/xss_low_controller')
router.get('/', validator.validateXSSlow, xss_low_controller.photos_list)

//XSS hard
