//first import mongoose library
const mongoose = require('mongoose');
//then import database file
const db = require('../config/mongoose');

//then import Schema of document 
const Task = require('../models/task');

//action function for homepage and then exports the function
module.exports.home = function(req,res){

    Task.find({})
    .then((result)=>{
        console.log(result);
        return res.render('../views/home',{ 
            taskList : result
        });
    })
    
}
//action function for add a task and then exports the function
module.exports.add = function(req,res){
    Task.create({
        name : req.body.name,
        categorie: req.body.categorie,
        dueDate : req.body.duedate
    })
    return res.redirect('back');
}
//action for delete task(s) and then exports the function
module.exports.delete = function(req,res){
    console.log(req.body);
    console.log(typeof(req.body.ids));
    let a = [];
    if(typeof(req.body.ids)== 'string'){
        console.log("inside String")
        a[0] = req.body.ids;
    }else{
        a = req.body.ids;
    }
    if(a){
        for(let i of a){
            console.log(i);
            Task.findByIdAndDelete(i)
            .then(()=>{
                console.log('done')
            })
        }   
    }
    console.log(typeof(a));
    res.redirect('back');
}