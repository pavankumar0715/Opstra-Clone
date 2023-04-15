const express = require('express');
const port = 8000;

const app = express();

//use the main router, this line always last
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log("Error in running the server ",err);
        return;
    }
    console.log("Server is running on port:",port);
})