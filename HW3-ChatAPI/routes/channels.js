//  ----- Channels.js -----

//  andrea.powell@student.chehalis.edu     *    10/8/2021
//  IT-212 Web Dev  * HW3-Chat API (pre-to-be backend for angular app)
//  
//  10/8/2021 - AP: Delete function removes the message body but leaves a sub to ensure unique numbering based on length of input
//  Otherwise delete would need to reorder, or use something besides lenhth as an id.  Leaving it was easier.
//
//  todo:
//      The create function does not create a new text file for messages.
//
// --------------------- Channel / Room Endpoints

var express = require('express');
var router  = express.Router();
var fs      = require('fs');

// get the channel list - ok
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

//  Get Channel Details - ok
router.get('/:id', function(req,res){
    try{
        const rawdata = fs.readFileSync('./data_channels.json');
        var channels = JSON.parse(rawdata);
        console.log(channels[req.params.id]);
        res.status(200).json(channels[req.params.id]);

    } catch(err){
        res.status(500).json({message: err.message});
    }
});

// Create a new Channel - ok
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

        //  Need to create a new file to hold the messages.  Something like:
        // var fileName = "./CH" + id + "_messages.json";
        // File myFileObject = new File(fileName);
        // myFileObject.createNewFile();
        // Then put some square braces in it & close

        channels.push(newObj);
        const data = fs.writeFileSync('data_channels.json', JSON.stringify(channels));
        res.status(201).json(newObj);

    } catch(err){
        res.status(500).json({message: err.message});
    }
});

// Update a channel's details - ok
router.patch('/:id', function(req, res) {
    try {
        console.log("Object being patched is: ", req.params.id, req.body);
        const rawdata = fs.readFileSync('data_channels.json');
        var channels = JSON.parse(rawdata);

        var id = req.params.id;
        var rawBody = req.body;

        var timestamp = "Updated " + Date().toString();
        var newID     = channels.length;
        channels[id].lastChange = timestamp;

        if (rawBody.name != null) {
            channels[id].name = rawBody.name;
        }
        
        if (rawBody.description != null) {
            channels[id].description = rawBody.description;
        }

        const data = fs.writeFileSync('data_channels.json', JSON.stringify(channels));
        res.status(200).json(channels[id]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a channel
//  ID retained to perserve uniqueness of IDs
//  todo:  The file representing the messages in the channel is retained and still accessible.
router.delete('/:id', function(req, res) {
    try{
        console.log("Object being deleted is: ", req.params.id, req.body);
        var id = req.params.id;
        const rawdata = fs.readFileSync('data_channels.json');
        var channels = JSON.parse(rawdata);

        // Need to delete the associated message file.  Something link:
        // var fileName = "./CH" + id + "_messages.json";
        // File myFileObject = new File(fileName);
        //  myFileObject.delete();

        var timestamp = "Deleted " + Date().toString();

        if (channels[id] != null) {
            channels[id].name        = "Channel has been removed.";
            channels[id].description = "Channel deleted";
            channels[id].lastChange  = "Deleted " + Date().toString();

            const data = fs.writeFileSync('data_channels.json', JSON.stringify(channels));
            res.status(200).json("deleted channel");
        }else{
            res.status(200).json("channel does not exist");
        }  
    } catch (err) {
        res.status(500).json({ message: err.message });
    }    
});

module.exports = router;