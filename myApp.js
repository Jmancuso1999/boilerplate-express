var express = require('express');
var app = express();
var bodyParser = require("body-parser");

const mySecret = process.env['MESSAGE_STYLE']

//#7 
app.use(function(req, res, next) {
	console.log(req.method + " " + req.path + " - " + req.ip)
	next();
})

//#11
app.use(bodyParser.urlencoded({extended: false}))

//#1
console.log("Hello World")

//#2
app.listen(3001, function() {
console.log('Listening on port 3000');
});

//#3
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

//#4
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

//When name is submitted, it's posted 
app.post('/name', (req, res) => {
    let name = req.body.first + ' ' + req.body.last;
    res.json({name: name});
  });
  

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


module.exports = app;

 