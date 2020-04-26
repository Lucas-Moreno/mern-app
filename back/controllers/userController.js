const express = require('express');
var router = express.Router();

// Constants
const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX  = /^(?=.*\d).{4,8}$/;

var {User} = require('../models/User');


router.get('/', (req, res) => {
    User.find((err, docs) =>{
        if(!err) res.send(docs)
        else console.log('error User not find')
    })
});

router.post('/', (req, res) =>{
    var newRecord = new User({
        pseudo : req.body.pseudo,
        mail : req.body.mail,
        password : req.body.password
    })

    if(!newRecord.pseudo || !newRecord.mail || !newRecord.password){
        return res.status(400).json({ 'error': 'missing parameters' });
    }

    if (newRecord.pseudo.length >= 13 || newRecord.pseudo.length <= 4) {
        return res.status(400).json({ 'error': 'wrong username (must be length 5 - 12)' });
    }
  
    if (!EMAIL_REGEX.test(newRecord.mail)) {
        return res.status(400).json({ 'error': 'email is not valid' });
    }
  
    if (!PASSWORD_REGEX.test(newRecord.password)) {
        return res.status(400).json({ 'error': 'password invalid (must length 4 - 8 and include 1 number at least)' });
    }

    newRecord.save((err, docs) => {
        if(!err) res.send(docs)
        else console.log('error create new record :' + JSON.stringify(err, undefined, 2))
        
    })
    
})



module.exports = router