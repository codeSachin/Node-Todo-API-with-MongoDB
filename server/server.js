var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.post('/todos', (req, res)=>{
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((docs)=>{
        res.send(docs);
    }, (err)=>{
        res.status(400).send(e);
    })
});

app.listen(3000, ()=> {
    console.log('Started server on port 3000......')
});

