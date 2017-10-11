var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp')

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: "Go to Gym NOW"
});

newTodo.save().then((res)=>{
    console.log(res);
}, (err)=> console.log(err));

var Users = mongoose.model('Users', {
    email:{
        required: true,
        trim: true,
        minlength: 1,
        type: String
    }
});
 var newUser = new Users({
     email: 'sachin17897@gmail.com'
 });

 newUser.save().then((res)=>{console.log(res)}, (err)=>{console.log(err)});