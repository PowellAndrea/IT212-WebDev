//  andrea.powell@student.chehalis.edu     * 10/8/2021
//  IT-212 Web Dev  * HW3-Chat API
//
//  Todo:  
//      allow edit of description
//
// --------------------- Channel Endpoints

var express = require('express');
var router  = express.Router();
var fs      = require('fs');

// Read * Channel List
router.get('/', function(req, res) {
    try{
        //res.status(200).json({message: "read all"});
        const rawdata = fs.readFileSync('data_channels.json');
        var channels = JSON.parse(rawdata);
        console.log(channels);
        res.status(200).json(channels);
        
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

//  Get / Display all messages - need lookup function?

router.get('/:channel', function(req,res){
    //  Show messages in channel
    var id = req.params.id;
    var fileName = "CH" + id + "_messages.json";
    res.status(200).json({message: fileName});
})

// Create
router.post('/', function(req, res){
    res.status(201).json({message: "You do not have the power to create new channels."});
});

// Update
router.patch('/:id', function(req, res){
    res.status(200).json({message: "You do not have the power to edit channels."});
});

// Delete
router.delete('/:id', function(req, res){
    res.status(200).json({message: "You are unworthy, be gone!"});
});

module.exports = router;