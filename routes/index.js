const express = require('express')
const router = express.Router()

module.exports = router
const validator = require('../misc/validator')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

const reset_controller = require('../controllers/db')
router.get('/reset', reset_controller.reset)


//XSS low controllers and routers
const xss_low_controller = require('../controllers/xss_low_controller')
router.get('/level1Low', validator.validateXSSlowSearch, xss_low_controller.photos_list)
router.post('/level1Low/update', validator.validateXSSlowPost, xss_low_controller.description_update)
router.get('/level1Low/warning', function (req, res) {
  res.send("Don't try running any scripts")
})

//XSS hard
const xss_high_controller = require('../controllers/xss_high_controller')
router.get('/level1Hard', validator.validateXSShigh, xss_high_controller.photos_list)

//noSQLi low
router.get('/level2Low', function (req, res) {
  res.render('level2Low')
})


//SQLi hard
const sqli_controller = require('../controllers/sqli_controller')
router.get('/level2Hard', sqli_controller.product_list)

//noSQLi low
const nosqli_controller = require('../controllers/nosqli_controller')
router.post('/level2Low', nosqli_controller.login)
router.get('/level2Low/user', function (req, res) {
  res.send('user')
})


//XXE low
const xxe_controller = require('../controllers/xxe_controller')
router.get('/xxe', xxe_controller.show)

router.get('/xxe/edit', function(req, res){
  res.render('XXEedit')
})

router.post('/xxe/edit', xxe_controller.upload)
