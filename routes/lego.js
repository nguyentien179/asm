var express = require('express');
const LegoModel = require('../models/LegoModel');
var router = express.Router();

router.get('/', async (req, res) => {
    legos = await LegoModel.find({});
    res.render('lego/index', { legos : legos });
}); 

router.get('/add', async (req, res) => {
    res.render('lego/add');
});
router.post('/add', async (req, res) => {
    var lego = req.body;
    await LegoModel.create(lego);
    res.redirect('/Lego');
});
router.get('/list', async (req, res) =>{
    legos = await LegoModel.find({});
    res.render('lego/list', { legos : legos });
});
router.get('/detail/:id', async (req, res) => {
    lego = await LegoModel.findById(req.params.id);
    res.render('lego/detail', { lego : lego });
});
router.get('/edit/:id', async (req, res) => {
    var lego = await LegoModel.findById(req.params.id);
    res.render('lego/edit', { lego: lego });
})
router.post('/edit/:id', async (req, res) => {
    await LegoModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/lego');
});
router.get('/delete/:id', async (req, res) => {
    await LegoModel.findByIdAndDelete(req.params.id);
    res.redirect('/Lego');
});

router.get('/buy/:id', async (req, res) => {
    lego = await LegoModel.findById(req.params.id);
    res.render('Lego/buy', { lego : lego });
});

router.post('/lego/search', async (req, res) =>
{
    var keyword = req.body.name;
    var legos = await LegoModel.find({name : new RegExp(keyword, "i")})
    res.render('lego/list', {legos : legos})
})
router.get('/asc', async (req, res) =>
{
    var legos = await LegoModel.find().sort({name : 1})
    res.render('lego/list', {legos : legos})
})
router.get('/desc', async (req, res) =>
{
    var legos = await LegoModel.find().sort({name : -1})
    res.render('lego/list', {legos : legos})
})
module.exports = router;