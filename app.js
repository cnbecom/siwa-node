var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {    
    res.sendFile(path.join(__dirname, 'index.html'));
});

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/redirect', (req, res) => {
    console.log('POST on redirect');
    console.log(req.body);
    res.send("complete");
})

app.listen(process.env.PORT || 4000, function () {
    console.log('Node app is working!');
});