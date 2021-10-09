//  andrea.powell@student.chehalis.edu     * 10/8/2021
//  IT-212 Web Dev  * HW3-Chat API
//
//  todo:
//      fix deletes
//      create channel errors
//  ----- Channels.js -----

var express = require('express');
var router  = express.Router();
var fs      = require('fs');

// get the channel list
router.get('/', function(req, res) {
    try{
        console.log("Showing channel list");
        const rawdata = fs.readFileSync('data_channels.json');
        var channels = JSON.parse(rawdata);

        res.status(200).json(channels);
        
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

//  get all messages from a channel
router.get('/:channel', function(req,res){
    try{
        var channel = req.params.channel;
        var fileName = "./CH" + channel + "_messages.json";
        console.log("opening " + fileName);
        
        const rawdata = fs.readFileSync(fileName);
        var messages = JSON.parse(rawdata);
        
        res.status(200).json({messages});
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

//  post a new message
router.post('/:channel', function(req,res){
    try{
        var channel = req.params.channel;
        var fileName = "CH" + channel + "_messages.json";
        console.log("opening " + fileName);
        
        const rawdata = fs.readFileSync(fileName);
        var messages = JSON.parse(rawdata);

        var rawBody = req.body;
        console.log("Posted object is: ", rawBody);

        var timestamp = "Created " + Date().toString();
        var newID = messages.length;

        var newObj = {
            id: newID,
            user: null,
            message: null,
            timestamp: timestamp 
        };

        if (rawBody.user != null){
            newObj.user = rawBody.user;
        }

        if (rawBody.message != null){
            newObj.message = rawBody.message;
        }

        messages.push(newObj);

        const data = fs.writeFileSync(fileName, JSON.stringify(messages));
        console.log("hello");
        res.status(200).json(newObj);

    } catch(err){
        res.status(500).json({message: err.message});
    }
})

// delete all messages from a channel
router.delete('/:id', function(req, res){
    res.status(200).json({message: "You are unworthy, be gone!"});
});


//  ----- Channel Administration -----

// Create a new Channel
router.post('/', function(req, res){
    try{
        console.log("Posted Object is: ", req.body);
        const rawdata = fs.readFileSync('data_channels.json');
        var channels = JSON.parse(rawdata);
        
        var rawBody = req.body;

        var timestamp = "Created " + Date().toString();
        var newID     = channels.length;

        var newObj = {
            id: newID,
            name: null,
            description: null,
            lastChange: timestamp
        }
        
        if (rawBody.name != null) {newObj.name = rawBody.name};
        if (rawBody.description != null) {newObj.description = rawBody.description};

        channels.push(newObj);
        const data = fs.writeFileSync('data_channels.json', JSON.stringify(channels));
        res.status(201).json(newObj);

    } catch(err){
        res.status(500).json({message: err.message});
    }
});


// Edit a channel's details
router.patch('/:id', function(req, res){
    res.status(200).json({message: "You do not have the power to edit channels."});
});

// Delete a channel


module.exports = router;