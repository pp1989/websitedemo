var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('meetup/meetup/index');
      
// });

router.get('/single', function(req, res, next) {
  res.render('meetup/meetup/single');
});

router.get('/', function(req, res, next) {
  res.render('meetup/meetup/index');
});

router.get('/indexnew', function(req, res, next) {
  res.render('indexnew');
});


module.exports = router;
