var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = new Schema({});

module.exports = mongoose.model('AnyNameNoMatter', photoSchema, 'Collection1');
