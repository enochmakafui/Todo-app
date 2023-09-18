// import express from "express";
const express = require('express');
const bodyParser = require('body-parser');
// import bodyParser from "body-parser";

const app = express();
const port = 3000;
const todayList = [];
const worklist = [];
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    
    res.render("index.ejs",{
        todayList
    })
})

app.get("/work",(req,res)=>{
    res.render("worklist.ejs",{
        worklist
    })
})

app.post("/submitToday",(req,res)=>{
    
    // console.log(req.body);
    todayList.push(req.body["todoName"]);
    res.render("index.ejs",{
        todayList
    })
})
app.post("/submitWork",(req,res)=>{
    
    // console.log(req.body);
    worklist.push(req.body["todoName"]);
    res.render("worklist.ejs",{
        worklist
    })
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`);
})