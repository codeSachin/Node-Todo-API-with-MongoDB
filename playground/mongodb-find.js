const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err){
    return console.log('Unable to connect to MongoDB server and exiting now....');
}
console.log('Connected to MongoDB Server');

db.collection('Users').find({age: 20}).toArray().then((docs)=>{
    console.log('Todos are');
    console.log(JSON.stringify(docs, undefined,2));
},(err)=>{
    console.log(err);
});


// db.close();
});