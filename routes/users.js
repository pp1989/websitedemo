var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', require('../api/contact').contact);
router.post('/statusChange', require('../api/userStatus').statusChange);


module.exports = router;
