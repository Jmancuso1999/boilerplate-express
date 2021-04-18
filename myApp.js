var express = require('express');
var app = express();

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.listen(3000, () => {
	console.log('App listening on port 3000');
});



































 module.exports = app;
