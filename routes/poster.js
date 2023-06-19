var express = require('express');
const PosterModel = require('../models/PosterModel');
var router = express.Router();

router.get('/', async (req, res) => {
    posters = await PosterModel.find({});
    res.render('poster/index', { posters : posters });
}); 

router.get('/add', async (req, res) => {
    res.render('poster/add');
});
router.post('/add', async (req, res) => {
    var poster = req.body;
    await PosterModel.create(poster);
    res.redirect('/poster');
});
router.get('/list', async (req, res) =>{
    posters = await PosterModel.find({});
    res.render('poster/list', { posters : posters });
});
router.get('/detail/:id', async (req, res) => {
    poster = await PosterModel.findById(req.params.id);
    res.render('poster/detail', { poster : poster });
});
router.get('/edit/:id', async (req, res) => {
    var poster = await PosterModel.findById(req.params.id);
    res.render('poster/edit', { poster: poster });
})
router.post('/edit/:id', async (req, res) => {
    await PosterModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/poster');
});
router.get('/delete/:id', async (req, res) => {
    await PosterModel.findByIdAndDelete(req.params.id);
    res.redirect('/poster');
});

router.get('/buy/:id', async (req, res) => {
    poster = await PosterModel.findById(req.params.id);
    res.render('poster/buy', { poster : poster });
});

router.post('/poster/search', async (req, res) =>
{
    var keyword = req.body.name;
    var posters = await PosterModel.find({name : new RegExp(keyword, "i")})
    res.render('poster/list', {posters : posters})
})
router.get('/asc', async (req, res) =>
{
    var posters = await PosterModel.find().sort({title : 1})
    res.render('poster/list', {posters : posters})
})
router.get('/desc', async (req, res) =>
{
    var posters = await PosterModel.find().sort({title : -1})
    res.render('poster/list', {posters : posters})
})
module.exports = router;