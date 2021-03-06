const express=require('express');

const server=express();

const port=3000;

server.use(express.json());

server.use(express.urlencoded({extended:true}));

//for all request ->index.html

server.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');

});

//for /index.html

server.get('/index.html',(req,res)=>{

    res.sendFile(__dirname+'/index.html');

});

server.post('/welcome',(req,res)=>{
    // var abc = req.body.firstname;

    res.sendFile(__dirname+'/welcome.html');

});

//for /js/main.js

server.get('/js/main.js',(req,res)=>{

    res.sendFile(__dirname+'/js/main.js');

});

//for /people.json

server.get('/people.json',(req,res)=>{

    res.sendFile(__dirname+'/people.json');

});




server.listen(port,()=>{

    console.log(`http://localhost:${port}/`);

})