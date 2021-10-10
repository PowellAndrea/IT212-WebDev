//  andrea.powell@student.chehalis.edu     *    10/8/2021
//  IT-212 Web Dev  * HW3-Chat API (pre-to-be backend for angular app)
//  
//  10/8/2021 - AP: Delete function removes the message body but leaves a sub to ensure unique numbering based on length of input
//  Otherwise delete would need to reorder, or use something besides lenght as an id.  Leaving it was easier.
//
//  todo:
//      No error checking, assumes correct input, lol.
//
// --------------------- Message Endpoints

var express = require('express');
var router  = express.Router();
var fs      = require('fs');

// Show the channel list
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

//  Get messages from a channel
router.get('/:id', function(req,res){
    try{
        var id = req.params.id;
        var fileName = "./CH" + id + "_messages.json";
        console.log("opening " + fileName);
        
        const rawdata = fs.readFileSync(fileName);
        var messages = JSON.parse(rawdata);
        
        res.status(200).json({messages});
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

// Post a new message
router.post('/:id', function(req, res){
    try{
        console.log("Posted Object is: ", req.body);
        var id = req.params.id;
        var fileName = "./CH" + id + "_messages.json";
        var rawBody = req.body;

        const rawdata = fs.readFileSync(fileName);
        var messages = JSON.parse(rawdata);
        console.log("Opened " + fileName);

        var timestamp = "Created " + Date().toString();
        var newID     = messages.length;

        var newObj = {
            id: newID,
            user: null,
            message: null,
            lastChange: timestamp
        }
        
        if (rawBody.user != null) {
            newObj.user = rawBody.user}
        ;

        if (rawBody.message != null) {
            newObj.message = rawBody.message
        };

        messages.push(newObj);
        const data = fs.writeFileSync(fileName, JSON.stringify(messages));
        res.status(201).json(newObj);

    } catch(err){
        res.status(500).json({message: err.message});
    }
});

// Update a message object
router.patch('/:id', function(req, res) {
    try {
        console.log("Object being patched is: ", req.params.id, req.body);
        var message = req.params.id;
        var fileName = "./CH" + message + "_messages.json";
        console.log("opening " + fileName);

        const rawdata = fs.readFileSync(fileName);
        var messages = JSON.parse(rawdata);

        var id = req.params.id;
        var rawBody = req.body;

        if (messages[id].user != null) {
            messages[id].user = rawBody.user;
        }
        
        if (rawBody.message != null) {
            messages[id].message = rawBody.message;
        }

        // save (write) the data back to the file
        const data = fs.writeFileSync(fileName, JSON.stringify(messages));

        // return the data to the user
        res.status(200).json(messages[id]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a message
router.delete('/:id', function(req, res) {
    try{
        var id = req.params.id;

        console.log("Object being deleted is: ", req.params.id, req.body);
        var fileName = "./CH" + id + "_messages.json";
        console.log("opening " + fileName);

        const rawdata = fs.readFileSync(fileName);
        var messages = JSON.parse(rawdata);

        var timestamp = "Deleted " + Date().toString();

        if (messages[id] != null) {
            messages[id].message    = "Message has been removed.";
            messages[id].lastChange  = "Deleted " + Date().toString();
            // write to the file
            const data = fs.writeFileSync(fileName, JSON.stringify(messages));
            res.status(200).json({ message: "deleted message"});
        }else{
            res.status(200).json({ message: "message does not exist"});
        }  
    } catch {
        res.status(500).json({ message: err.message });
    }    
});

module.exports = router;