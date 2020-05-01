const express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils');


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

router.post('/register', (req, res) =>{

    var pseudo = req.body.pseudo;
    var mail = req.body.mail;
    var password = req.body.password;

    if(!pseudo || !mail || !password){
        return res.status(400).json({ 'error': 'missing parameters' });
    }

    if (pseudo.length >= 13 || pseudo.length <= 4) {
        return res.status(400).json({ 'error': 'wrong username (must be length 5 - 12)' });
    }
  
    if (!EMAIL_REGEX.test(mail)) {
        return res.status(400).json({ 'error': 'email is not valid' });
    }
  
    if (!PASSWORD_REGEX.test(password)) {
        return res.status(400).json({ 'error': 'password invalid (must length 4 - 8 and include 1 number at least)' });
    }


    User.findOne({mail : mail})
    .then((mail) =>{
        if(!mail){
            bcrypt.hash(password, 3, function(err, hash) {
                var newRecord = User.create({
                    pseudo : req.body.pseudo,
                    mail : req.body.mail,
                    password : hash
                })
                .then((newRecord) =>{
                    newRecord.save((err, docs) => {
                        if(!err) {
                            return res.status(201).json({'ok' : 'create'});
                        }
                            return res.status(400).json('error create new record :' + JSON.stringify(err, undefined, 2))
                    })
                })   
                .catch(function(err){
                    return res.status(500).json({ 'error' : 'pas de mot de passe'})
                });
            });
        }else{
            return res.status(400).json({'error' : 'user already exist'})
        }
    })
    .catch(function(err){
        return res.status(500).json({ 'error' : 'unable to verify user'})
    });
})

router.post('/login', (req, res) =>{
    
    var id = req.body._id;
    var mail = req.body.mail;
    var password = req.body.password;

    if(!password || !mail ){
        return res.status(400).json({ 'error': 'missing parameters' });
    }
    User.findOne({mail : mail})
    .then((userFound) =>{
        if(userFound){
            bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt){
                if(resBycrypt){
                    return res.status(200).json({
                        'mail' : mail,
                        'password' : password,
                        'token' : jwtUtils.generateTokenForUser(userFound)
                    })
                }
            })
        }else{
            return res.status(500).json({ 'error' : 'invalid password'})
        }
    })
    .catch(() =>{
        return res.status(500).json({ 'error' : 'unable to verify user'})
    })

});


module.exports = router