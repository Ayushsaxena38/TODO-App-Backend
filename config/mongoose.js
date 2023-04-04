
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task_list_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
});
console.log('inside mongoose.connect');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('Successfully connected to database');
})

