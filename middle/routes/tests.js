var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({tests: 1});
});
router.get('/1', function(req, res, next) {
  axios.get('https://sound-round.herokuapp.com/tests/')
    .then((response) => {
        res.send({success: true, data: response.data});
    })
    .catch((error) => {
        res.send({success: false, error: error.response});
    });
});
module.exports = router;
