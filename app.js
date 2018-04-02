//importing all the modules

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

//defining all routes in this directory
const route = require('./routes/route'); 


//Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/contactList');
mongoose.connection.on('connected',()=>{
console.log("Connected to MongoDB successfully");
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log("Error in Db connection: "+ err);
    }
});




//port number
const port = 3000;



//middle ware for server
app.use(cors());

//using body parser to convert request to json
app.use(bodyparser.json());


//static html files loading path
app.use(express.static(path.join(__dirname,'public')));


app.use('/api',route);



//testing server

app.get('/',(req, res)=>{
    res.send("Hello world");
});



app.listen(port,()=>{
    console.log("server is running on port number: " + port);
});

