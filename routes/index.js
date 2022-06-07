const express = require('express')
const router = express.Router()

module.exports = router
const validator = require('../misc/validator')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Web-CTF' })
})

const reset_controller = require('../controllers/db')
router.get('/reset', reset_controller.reset)


//XSS low controllers and routers
const xss_low_controller = require('../controllers/xss_low_controller')
router.get('/level1Low', validator.validateXSSlowSearch, xss_low_controller.photos_list)
router.post('/level1Low', validator.validateXSSlowPost, xss_low_controller.description_update)

//XSS hard
const xss_high_controller = require('../controllers/xss_high_controller')
router.get('/level1Hard', validator.validateXSShigh, xss_high_controller.photos_list)

//noSQLi low
router.get('/level2Low', function (req, res) {
  res.render('level2Low')
})
const nosqli_controller = require('../controllers/nosqli_controller')
router.post('/level2Low', nosqli_controller.login)


//SQLi hard
const sqli_controller = require('../controllers/sqli_controller')
router.get('/level2Hard', sqli_controller.product_list)


//XXE
const xxe_controller = require('../controllers/xxe_controller')
router.get('/xxe', xxe_controller.show)
router.get('/xxe/edit', function(req, res){
  res.render('XXEedit')
})
router.post('/xxe/edit', xxe_controller.upload)


//File upload hard
router.get('/fileupload', function(req, res){
  res.render('fileupload')
})

const file_upload_controller = require('../controllers/file_upload_controller')
router.post('/fileupload', file_upload_controller.upload)


//Prototype Pollution => RCE
const prototype_pollution_controller = require('../controllers/prototype_controller')
router.get('/proto', prototype_pollution_controller.exploit)

//RCE easy
const rce_controller = require('../controllers/rce_controller')
//router.get('/rce', rce_controller.calculator)
router.get('/rce', function(req, res){
  res.render('calculator')
})

router.post('/rce', rce_controller.calculator)