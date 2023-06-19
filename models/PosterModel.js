var mongoose = require('mongoose');

var PosterSchema = mongoose.Schema({
    image : String,
    name : String,
    price : Number,
    origin : String,
    size : Number,
    manufacturDate : Number,
});

var PosterModel = mongoose.model('Poster', PosterSchema, 'poster');

module.exports = PosterModel;