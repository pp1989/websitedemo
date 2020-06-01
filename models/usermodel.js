const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    name: String,
    email: String,
    status: false,
})

const usermondel = mongoose.model("userModel", Schema)

module.exports = usermondel;