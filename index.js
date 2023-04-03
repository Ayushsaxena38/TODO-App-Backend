const express = require('express');
const port = 8000;

const app = express();

app.use('/',require('./routes/home'));

//set up the ejs
app.set('view engine','ejs');
app.set('views', './views');

//for use static files
app.use(express.static('./assets'));

app.listen(port , function(err){
    if(err){
        console.log(`error in starting the server: ${err}`);
        return;
    }
    console.log(`Server is Up! and listen to the port: ${port}`);
    
})