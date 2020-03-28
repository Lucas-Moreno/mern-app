const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lucas:lucas@cluster0-bqizz.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('MongoDB connected')
        else
            console.log('Error while connecting MongoDB : ' . JSON.stringify(err, undefined, 2))
    }
)