var express= require("express");
var app = express();

var server= require("http").createServer(app);
server.listen(3000);

app.get("/",function(req,res){


    res.sendFile(__dirname +"/index.html");
});

