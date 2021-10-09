//  andrea.powell@student.chehalis.edu  *   10/8/2021
//  IT-212 Web Dev  * HW3-Chat API
//
//  Index.js

var express     = require('express');
var morgan      = require('morgan');
var app         = express();
//var apiRoutes   = require('./routes/api');
var chat        = require('./routes/chat');
var channels    = require('./routes/channels');
var users       = require('./routes/users');


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(morgan('combined'));
app.use('/', chat);
//app.use('/chat', chat);
app.use('/users', users);
app.use('/channels', channels );

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening on ", host, port);
});
