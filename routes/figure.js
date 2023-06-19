var express = require('express');
const FigureModel = require('../models/FigureModel');
var router = express.Router();

router.get('/', async (req, res) => {
    figures = await FigureModel.find({});
    res.render('figure/index', { figures : figures });
}); 

router.get('/add', async (req, res) => {
    res.render('figure/add');
});
router.post('/add', async (req, res) => {
    var figure = req.body;
    await FigureModel.create(figure);
    res.redirect('/figure');
});
router.get('/list', async (req, res) =>{
    figures = await FigureModel.find({});
    res.render('figure/list', { figures : figures });
});
router.get('/detail/:id', async (req, res) => {
    figure = await FigureModel.findById(req.params.id);
    res.render('figure/detail', { figure : figure });
});
router.get('/edit/:id', async (req, res) => {
    var figure = await FigureModel.findById(req.params.id);
    res.render('figure/edit', { figure: figure });
})
router.post('/edit/:id', async (req, res) => {
    await FigureModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/figure');
});
router.get('/delete/:id', async (req, res) => {
    await FigureModel.findByIdAndDelete(req.params.id);
    res.redirect('/figure');
});

router.get('/buy/:id', async (req, res) => {
    figure = await FigureModel.findById(req.params.id);
    res.render('figure/buy', { figure : figure });
});

router.post('/figure/search', async (req, res) =>
{
    var keyword = req.body.name;
    var figures = await FigureModel.find({name : new RegExp(keyword, "i")})
    res.render('figure/list', {figures : figures})
})
router.get('/asc', async (req, res) =>
{
    var figures = await FigureModel.find().sort({title : 1})
    res.render('figure/list', {figures : figures})
})
router.get('/desc', async (req, res) =>
{
    var figures = await FigureModel.find().sort({title : -1})
    res.render('figure/list', {figures : figures})
})
module.exports = router;