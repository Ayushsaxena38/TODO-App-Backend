//first import/require the express library
const express = require('express');
//define the port
const port = 8000;
//now create the app/server
const app = express();
//middleware for accessing and changing properties of req.body
app.use(express.urlencoded());

app.use('/',require('./routes/home'));

//set up the ejs
app.set('view engine','ejs');


//for use static files
app.use(express.static('./assets'));

//here app.listen() to start the server
app.listen(port , function(err){
    if(err){
        console.log(`error in starting the server: ${err}`);
        return;
    }
    console.log(`Server is Up! and listen to the port: ${port}`);
    
})