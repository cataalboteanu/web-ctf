const express = require('express')
const router = express.Router()

module.exports = router
const validator = require('../misc/validator')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

//XSS low controllers and routers
const xss_low_controller = require('../controllers/xss_low_controller')
router.get('/level1Low', validator.validateXSSlowSearch, xss_low_controller.photos_list)
router.post('/level1Low/update', validator.validateXSSlowPost, xss_low_controller.description_update)
router.get('/level1Low/warning', function (req, res) {
  res.render('warning')
})

//XSS hard
const xss_high_controller = require('../controllers/xss_high_controller')
router.get('/level1Hard', validator.validateXSShigh, xss_high_controller.photos_list)

//SQLi low
router.get('/level2Low', function (req, res) {
  res.render('level2Low')
})

//SQLi hard
const sql_high_controller = require('../controllers/sql_high_controller')
router.get('/level2Hard', function (req, res) {
  res.render('level2Hard')
})






