const mongoose = require('mongoose');

var User = mongoose.model('User',{
    pseudo : {type: String},
    mail : {type: String},
    password : {type: String},
}, 'users')

module.exports = { User }