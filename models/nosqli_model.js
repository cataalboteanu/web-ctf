var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
    username: String,
    password: String,
    role:String
});

module.exports = mongoose.model('LoginCollection', loginSchema, 'nosql-bypass');