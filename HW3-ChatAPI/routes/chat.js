//  andrea.powell@student.chehalis.edu     * 10/8/2021
//  IT-212 Web Dev  * HW3-Chat API

const { response } = require('express');
var express = require('express');
var router  = express.Router();
var fs      = require('fs');

// --------------------- Main Chat App Endpoints

// Read * Chat Index
router.get('/', function(req, res) {
    try{
        const rawdata = fs.readFileSync('page_welcome.json');
        var channels = JSON.parse(rawdata);
        console.log(channels);
        res.status(200).json(channels);
      
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

router.get('/user1', function(req,res){
    try{
        const rawdata = fs.readFileSync('data_users.json');
        var channels = JSON.parse(rawdata);
        console.log(channels);
        res.status(200).json(channels);
      
    } catch(err){
        res.status(500).json({message: err.message});
    }  
});

// Create
router.post('/', function(req, res){
    res.status(201).json({message: "Changes are not allowed here."});
});

// Update
router.patch('/:id', function(req, res){
    res.status(200).json({message: "Nothing to update"});
});

// Delete
router.delete('/:id', function(req, res){
    res.status(200).json({message: "You cannot delete this, bad dog!"});
});

module.exports = router;