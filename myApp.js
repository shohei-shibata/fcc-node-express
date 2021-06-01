var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var indexPath = __dirname + "/views/index.html"
var assetsPath = __dirname + "/public"

app.use(bodyParser.urlencoded({extended: false}))
app.use("/public", express.static(assetsPath))

app.get("/", function(req, res) {
	res.sendFile(indexPath)
})

/*
app.get("/json", function(req, res) {
  const isUppercase = process.env.MESSAGE_STYLE === "uppercase"
  const message = "Hello json"
  res.json({
    "message": isUppercase ? message.toUpperCase() : message
  })
})
*/
/*
app.use(function(req, res, next) {
  console.log(req.method, req.path, "-", req.ip)
  next()
})
*/
/*
app.get("/now", function (req, res, next) {
  req.time = new Date().toString()
  next()
}, function (req, res) {
  res.json({
    time: req.time
  })
})*/

// echo server
/*
app.get("/:word/echo", function(req, res) {
  console.log(req.params.word)
  res.json({
    echo: req.params.word
  })
})
*/

// query parameter
app.route("/name").get(function(req, res) {
  const {first, last} = req.query
  res.json({
    name: first+" "+last
  })
}).post(function(req, res) {
  const {first, last} = req.body
  console.log(first, last)
  res.json({
    name: first+" "+last
  })
})
































 module.exports = app;
