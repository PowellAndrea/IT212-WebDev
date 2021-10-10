//  andrea.powell@student.chehalis.edu     *    10/8/2021
//  IT-212 Web Dev  * HW3-Chat API (pre-to-be backend for angular app)
//
//  todo:
//      Scope reserved for chat application settings.  Not much going on here.
//
// --------------------- Chat API Endpoints

const { response } = require('express');
var express = require('express');
var router  = express.Router();
var fs      = require('fs');


// Read * Chat Welcome Page (awkward)
router.get('/', function(req, res) {
    try{
        const rawdata = fs.readFileSync('page_welcome.json');
        var welcome = JSON.parse(rawdata);
        console.log("Show the welcome message");
        res.status(200).json(welcome);
      
    } catch(err){
        res.status(500).json({message: err.message});
    }
});


// Create
router.post('/', function(req, res){
    res.status(201).json({message: "Space reserved for system settings.  Users: http://localhost:3000/users, Channels: http://localhost:3000/channels"});
});

// Update
router.patch('/', function(req, res){
    res.status(201).json({message: "Space reserved for system settings.  Users: http://localhost:3000/users, Channels: http://localhost:3000/channels"});
});

// Delete
router.delete('/', function(req, res){
    res.status(200).json({message: "You cannot delete this, bad dog!"});
});

module.exports = router;