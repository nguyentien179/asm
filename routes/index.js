var express = require('express');
var router = express.Router();

/* GET home page. */
 router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
 });
router.get('/about', (req, res) => {
    res.render('about');
});
router.get('/admin', (req, res) => {
    res.render('admin');
});
module.exports = router;
