const { check, validationResult } = require('express-validator')

exports.validateXSSlow = 
                check('text').trim().not().isEmpty().withMessage('Search cannot be empty!')
                .bail().not().contains('script').withMessage("Don't try running any scripts");