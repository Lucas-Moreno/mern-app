const express = require('express');
var router = express.Router();


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

    

    newRecord.save((err, docs) => {
        if(!err) res.send(docs)
        else console.log('error create new record :' + JSON.stringify(err, undefined, 2))
        
    })
    
})



module.exports = router