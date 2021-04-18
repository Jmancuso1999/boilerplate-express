var express = require('express');
var app = express();

const mySecret = process.env['MESSAGE_STYLE']

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

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

 module.exports = app;

 