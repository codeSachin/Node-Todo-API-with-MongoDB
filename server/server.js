var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());
app.post('/todos', (req, res)=>{
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((docs)=>{
        res.send(docs);
    }, (err)=>{
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res)=>{
    Todo.find().then((doc)=>{
        res.send({doc, code:200});
    }, (err)=>{
        res.send(err);
    });
});

app.listen(port, ()=> {
    console.log(`Started server on port ${port}......`)
});

module.exports = {
    app
};