var express = require('express');
var app = express.createServer(express.logger);

app.get('/', function(request, response) {
	var fs = require('fs');
<<<<<<< HEAD
	var buf = fs.readFileSync('index.html', 'utf8');
	response.send(buf.toString());
=======
	var buf = new Buffer(256);
	response.send(buf.toString('utf8', fs.readFileSync("index.html")));
>>>>>>> 79dc52c0de4ed8c861f7d41445bd22bb18f2c0e4
});

//  response.send('Hello World2!'); });
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
