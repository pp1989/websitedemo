var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoDB', (err, db)=>{
    if (err) {
        console.log('Failed Connection To Database');
    } else {
        console.log('Connected To MongoDB Database');
    }

});

module.exports = {mongoose};



