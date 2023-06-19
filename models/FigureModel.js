var mongoose = require('mongoose');

var FigureSchema = mongoose.Schema({
    image : String,
    name : String,
    price : Number,
    origin : String,
    size : Number,
    manufacturDate : Number,
});

var FigureModel = mongoose.model('Figure', FigureSchema, 'figure');

module.exports = FigureModel;