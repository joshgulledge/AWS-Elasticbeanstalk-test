var express = require('express');
var app = express();
var fs = require('fs');
var port = 8080;

app.listen(port, function() {
  console.log('Hello friend, server is now running at http://127.0.0.1:', port);
});

app.get('/test', function (req, res) {
    res.send('the REST endpoint test');
});

app.get('/', function (req, res) {
    console.log("in the get / method now");
    html = fs.readFileSync('index.html');
    res.writeHead(200);
    res.write(html);
    res.end();
});
