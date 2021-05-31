var express = require('express');
var app = express();

var indexPath = __dirname + "/views/index.html"

console.log(indexPath)

app.get("/", function(req, res) {
	res.sendFile(indexPath)
})
































 module.exports = app;
