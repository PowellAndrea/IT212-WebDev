//  andrea.powell@student.chehalis.edu     * 10/8/2021
//  IT-212 Web Dev  * HW3-Chat API
// pre-to-be backend for angular app
//
//  todo:
//      Timestamsp date/time on add and update
//      Update Users - allow to select new default channel
//
// --------------------- User Endpoints

var express = require('express');
var router  = express.Router();
var fs      = require('fs');

// Read * User List
router.get('/', function(req, res) {
    try{
        const rawdata = fs.readFileSync('data_users.json');
        var users = JSON.parse(rawdata);
        console.log(users);
        res.status(200).json(users);
        
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

        var newObj = {
            _id: null,
            name: null,
            defaultChannel: null
        }
        
        if (rawBody.name != null) {newObj.name = rawBody.name};
        if (rawBody.defaultChannel != null) {newObj.defaultChannel = rawBody.defaultChannel};
        newObj._id = users.length;

        users.push(newObj);
        const data = fs.writeFileSync('data_users.json', JSON.stringify(users));
        res.status(201).json(newObj);

    } catch(err){
        res.status(500).json({message: err.message});
    }
});

// Update
router.patch('/:id', function(req, res){
    res.status(200).json({message: "You cannot edit users"});
});

// Delete a user
router.delete('/:id', function(req, res){
    try{
        var id = req.params.id;
        const rawdata   = fs.readFileSync(data_users.json);
        var users = JSON.parse(rawdata);

        if(users.length > id){
            users.splice(id,1);
        }
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;