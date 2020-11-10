var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});
router.get('/test/user/:userId', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});
router.get('/test/midi', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});
router.get('/test/audio', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});
module.exports = router;
