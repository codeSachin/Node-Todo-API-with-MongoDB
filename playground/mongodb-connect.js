const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to conenct to Mongo Server');
        return;
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Sachin Saini Yo',
    //     completed: false,
    //     age: 20
    // }, (err, result) => {
    //     if(err){
    //         console.log('Could not insert the records and exiting now...');
    //         return;
    //     }
    //     else{
    //         console.log(JSON.stringify(result.ops,undefined,2));
    //     }
    // });

    db.collection('Users').insertOne({
        name: 'Sachin',
        age: 20,
        location: 'Rajpura'
    },(err, result)=>{
        if(err){
            console.log('Could not insert a new user and now exiting...');
            return;
        }
        else{
            console.log(JSON.stringify(result.ops, undefined,2));
        }
    });

    db.close();

});

