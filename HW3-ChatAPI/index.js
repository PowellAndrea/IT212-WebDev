//  andrea.powell@student.chehalis.edu     *    10/8/2021
//  IT-212 Web Dev  * HW3-Chat API (pre-to-be backend for angular app)
//
// --------------------- Message Endpoints

var express     = require('express');
var morgan      = require('morgan');
var app         = express();
var chat        = require('./routes/chat');
var channels    = require('./routes/channels');
var messages    = require('./routes/messages');
//var users       = require('./routes/users');      // Hooray for scope creep.


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(morgan('combined'));
app.use('/', chat);
//app.use('/users', users);
app.use('/channels', channels );
app.use('/messages', messages );

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening on ", host, port);
});
