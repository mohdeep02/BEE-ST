const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name : {type:String},
    age : {type : Number}
})

module.exports = mongoose.model("G2User", user)