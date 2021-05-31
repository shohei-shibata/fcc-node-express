var express = require('express');
var app = express();

var indexPath = __dirname + "/views/index.html"
var assetsPath = __dirname + "/public"

app.get("/", function(req, res) {
	res.sendFile(indexPath)
})

app.get("/json", function(req, res) {
  const isUppercase = process.env.MESSAGE_STYLE === "uppercase"

  const message = "Hello json"

  res.json({
    "message": isUppercase ? message.toUpperCase() : message
  })
})

app.use("/public", express.static(assetsPath))
































 module.exports = app;
