var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Views"))
app.set("view engine","ejs")

var data=[];

app.get("/",function(req,res){

    res.render("page",{data: data});
});

app.post("/",function(req,res){
    
    var Ammount=req.body.Ammount;
    var Date=req.body.Date;
    var Comments=req.body.Comments;
    var temp={Ammount: Ammount,Date: Date,Comments: Comments};
    data.push(temp);
    res.redirect("/");

});

app.listen(process.env.Port || 3000,function(){
    console.log("app is running")
});