var express = require('express');
var app = express();

const mySecret = process.env['MESSAGE_STYLE']

app.use(function(req, res, next) {
	console.log(req.method + " " + req.path + " - " + req.ip)
	next();
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
	if (process.env.MESSAGE_STYLE === "uppercase") {
		res.json({"message" : "HELLO JSON"});
	} else {
		res.json({"message" : "Hello json"});
	}
});

app.get('/now', function(req,res, next){
		next();
	}, function(req, res){
			var time =  new Date()
			console.log('time'+time);
			res.json({'time': time});
		});

app.get("/:word/echo", (req, res) => {
  let word = req.params.word
  
  let jsonObj = {echo: word,echo: word};
  res.send(jsonObj);
});

app.get('/name', (req, res) => {
  let first = req.query.first;
  let last = req.query.last;
  
  let jsonObj = { name: `${first} ${last}` };
  res.send(jsonObj);
});

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

 module.exports = app;

 