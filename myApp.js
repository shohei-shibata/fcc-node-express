var express = require('express');
var app = express();

var indexPath = __dirname + "/views/index.html"
var assetsPath = __dirname + "/public"

console.log(assetsPath)

app.get("/", function(req, res) {
	res.sendFile(indexPath)
})

app.use("/public", express.static(assetsPath))
































 module.exports = app;
