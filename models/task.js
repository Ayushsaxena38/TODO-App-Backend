//first import/require the mongoose library
const mongoose = require('mongoose');
//define the task Schema
const taskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    categorie : {
        type : String,
        required : true
    },
    dueDate : {
        type : Date,
        required : true
    }
});
//collect the instance of Schema
const Task = mongoose.model('Task',taskSchema);
//export the Schema
module.exports = Task;