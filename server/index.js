const fs=require('fs');
const path=require('path');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser')
const express=require('express');
const app=express();
const userApi=require('./api/userApi');



app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',userApi);

app.listen(8081);

console.log("success listen to port at 8081!");