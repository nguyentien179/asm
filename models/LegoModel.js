var mongoose = require('mongoose');

var LegoSchema = mongoose.Schema({
    image : String,
    name : String,
    price : Number,
    manufacturDate : Number,
});

var LegoModel = mongoose.model('Lego', LegoSchema, 'lego');

module.exports = LegoModel;