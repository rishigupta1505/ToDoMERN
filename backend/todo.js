const express=require('express');
const bodyparser=require('body-parser');
const mongoose = require('mongoose');
const port=process.env.PORT || 3000;
const todo=require('./todoSchema');
const app=express();
const dburi='mongodb+srv://rishi:atlas@todo.sqeoj.mongodb.net/todo-app?retryWrites=true&w=majority';
mongoose.connect(dburi,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(function (){
console.log("mongoose is connected");
}).catch(function (err){
    console.log(err);
});
app.listen(port,()=>{
    console.log("App is listening "+port);
});

app.get('/todos',(req,res)=>{
    todo.find().then(result=>{
        console.log(result);
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
})