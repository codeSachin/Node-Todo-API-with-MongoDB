// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err){
    return console.log('Unable to connect to MongoDB server and exiting now....');
}
console.log('Connected to MongoDB Server');

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('59dcefca49bc50127ccd4726')
// },
// {
//     $set: {
//         completed: true
// }
// },
// {
//     returnOriginal: false
// }).then((res)=>console.log(res));

db.collection('Todos').findOneAndUpdate({
    text: "Sachin Saini Yo"
},{
    $set:{
        text: "Sachin Saini",
        completed: true,
    },
    $inc: {
        age:1
    }
},{
    returnOriginal: false
}).then((res)=>console.log(res),(err)=>console.log(err));

// db.close();
});