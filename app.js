var express = require("express");
var app = express();

app.set("view engine","ejs")

app.get("/",function(req,res){

    res.render("page");
});

app.listen(5000,function(){
    console.log("app is running")
});