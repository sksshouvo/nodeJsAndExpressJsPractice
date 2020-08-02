var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res)=>{
res.send("<h1>  Hello Express</h1>");
})

app.listen(port, ()=>{
console.log("Listening on port "+port)
});