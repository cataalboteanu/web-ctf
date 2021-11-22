const express = require('express')
const router = express.Router()

module.exports = router
const validator = require('../validator')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

//XSS low controller and router
//const xss_low_controller = require('../controllers/xss_low_controller')
//router.get('/level1', validator.validateXSSlow, xss_low_controller.photos_list)

//XSS hard
const xss_high_controller = require('../controllers/xss_high_controller')
router.get('/level1', validator.validateXSShigh, xss_high_controller.photos_list)




