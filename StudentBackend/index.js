var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var app=express();

//customer
const StudentRoute=require('./Student/routes/add-student');




app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  //student

app.use('/api',StudentRoute)

const port=5000;
app.listen(port,()=>{
    console.log("app is running"+port);
})