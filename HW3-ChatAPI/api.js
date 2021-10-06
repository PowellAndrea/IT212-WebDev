// api.js
var express = require('express');
var router = express.Router();
var fs = require('fs');

// --------------------- Endpoints / Routes

// Read
router.get('/', function(req, res) {
    try{
        // res.status(200).json({message: "read all"});
        const rawdata = fs.readFileSync('data.json');
        var students = JSON.parse(rawdata);
        console.log(students);
        res.status(200).json(students);
        
    } catch(err){
        res.status(500).json({message: err.message});

    }
});

// Create
router.post('/', function(req, res){
    res.status(201).json({message: "create"});
});

// Update
router.patch('/:id', function(req, res){
    try{
        console.log("Object being patched is: ", req.params.id, req.body);
        const rawdata = fs.readFileSync('users.json');

        var id = req.params.id;
        var rawBody = req.body;

        if (rawBody.name != null){
            users[id].name = rawBody.name;
        }

        if (rawBody.age != null){
            users[id].age = rawBody.age;
        }

        const data = fs.writeFileSync('users.json', JSON.stringify(users));
    } catch {
        res.status(200).json({message: "edited the object"});
    }
});

// Delete
router.delete('/:id', function(req, res){
    res.status(200).json({message: "deleted"});
});

module.exports = router;
