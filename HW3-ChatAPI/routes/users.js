//  andrea.powell@student.chehalis.edu     *    10/8/2021
//  IT-212 Web Dev  * HW3-Chat API (pre-to-be backend for angular app)
//  
//  Not enabled in main app - can I say out of scope?
//
//  todo:
//      Delete needs to be updated to preserve ID
//
// --------------------- User Endpoints

var express = require('express');
var router  = express.Router();
var fs      = require('fs');

//  Read user list
router.get('/', function(req, res) {
    try{
        const rawdata = fs.readFileSync('data_users.json');
        var users = JSON.parse(rawdata);
        console.log("Show list of users");
        res.status(200).json(users);
        
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

//  Read user details
router.get('/:id', function(req,res){
    try{
        const rawdata = fs.readFileSync('data_users.json');
        var users = JSON.parse(rawdata);
        console.log(users[req.params.id]);
        res.status(200).json(users[req.params.id]);

    } catch(err){
        res.status(500).json({message: err.message});
    }
});

// Create new user object
router.post('/', function(req, res){
    try{
        console.log("Posted Object is: ", req.body);
        const rawdata = fs.readFileSync('data_users.json');
        var users = JSON.parse(rawdata);
        
        var rawBody = req.body;
        var timestamp = "Created " + Date().toString();

        var newObj = {
            id: null,
            name: null,
            defaultChannel: null,
            lastChange: timestamp
        }
        
        if (rawBody.name != null) {newObj.name = rawBody.name};
        if (rawBody.defaultChannel != null) {newObj.defaultChannel = rawBody.defaultChannel};
        newObj.id = users.length;

        users.push(newObj);
        const data = fs.writeFileSync('data_users.json', JSON.stringify(users));
        res.status(201).json(newObj);

    } catch(err){
        res.status(500).json({message: err.message});
    }
});

// Update a user object
router.patch('/:id', function(req, res) {
    try {
        console.log("Object being patched is: ", req.params.id, req.body);
        const rawdata = fs.readFileSync('data_users.json');
        var users = JSON.parse(rawdata);

        // add data, but controlled
        var id = req.params.id;
        var rawBody = req.body;

        if (rawBody.name != null) {
            users[id].name = rawBody.name;
        }
        
        if (rawBody.defaultChannel != null) {
            users[id].defaultChannel = rawBody.defaultChannel;
        }

        const data = fs.writeFileSync('data_users.json', JSON.stringify(users));

        res.status(200).json(users[id]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a user
router.delete('/:id', function(req, res) {
    var id = req.params.id;

    const rawdata = fs.readFileSync('data_users.json');
    var users = JSON.parse(rawdata);

    // if found delete it
    if (users.length > id) {
        // modify the object
        var mObj = users[id];
        users.splice(id, 1);

        // write to the file
        const data = fs.writeFileSync('data_users.json', JSON.stringify(users));

        res.status(200).json({ message: "deleted user"});
    } else {
        res.status(500).json({ message: err.message });
    }    
});

module.exports = router;