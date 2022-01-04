var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = new Schema({
    path: String,
    description: String
});

module.exports = mongoose.model('PhotoCollection', photoSchema, 'Collection1');
