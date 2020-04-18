const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;


var {PostMessage} = require('../models/postMessage');


router.get('/', (req, res) => {
    PostMessage.find((err, docs) =>{
        if(!err) res.send(docs)
        else console.log('error postMessage not find')
    })
});

router.post('/', (req, res) =>{
    var newRecord = new PostMessage({
        title: req.body.title,
        message: req.body.message
    })

    newRecord.save((err, docs) => {
        if(!err) res.send(docs)
        else console.log('error create new record :' + JSON.stringify(err, undefined, 2))
    })
})

router.put('/:id', (req, res) =>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('no record with given id :' + req.params.id)

    var updatedRecord = {
        title: req.body.title,
        message: req.body.message
    }

    PostMessage.findByIdAndUpdate(req.params.id,{$set:updatedRecord}, {new:true}, (err, docs) =>{
        if(!err) res.send(docs)
        else console.log('error updating record :' + JSON.stringify(err, undefined, 2))
    })
});

router.delete('/:id', (req, res) =>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('no record with given id :' + req.params.id)


    PostMessage.findByIdAndRemove(req.params.id, (err, docs) =>{
        if(!err) res.send(docs)
        else console.log('error deleting record :' + JSON.stringify(err, undefined, 2))
    })
});

module.exports = router