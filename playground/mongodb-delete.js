const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err){
    return console.log('Unable to connect to MongoDB server and exiting now....');
}
console.log('Connected to MongoDB Server');

//deleteMany


//deleteOne
db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((res)=>console.log(res));

//findOneAndDelete

db.collection('Todos').findOneAndDelete({completed: true}).then((res)=>console.log(res));



// db.close();
});