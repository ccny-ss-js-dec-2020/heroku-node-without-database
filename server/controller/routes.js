//importing dependencies
var express = require('express');
//you do not have to do npm i for this, as it is built into node
var path = require('path');

const sesame_street_characters = require('../data/characters.js');

//storing express.Router() in a variable
//which is built into express to store and export your routes
var router = express.Router();

//connecting your home route to an html file on the client side
//this will what you see at http://localhost:3000
//the connnection to an html page will always be a "get"
router.get('/', function(req,res){
	//research path & path.join on stack overflow
	//console.log(req)
	//console.log(dirname)
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

//connecting your home route to an html file on the client side
//this will what you see at http://localhost:3000/another-page
//the connnection to an html page will always be a "get"
router.get('/another-page', function(req,res){
	//research path & path.join on stack overflow
	//console.log(req)
	//console.log(dirname)
	res.sendFile(path.join(__dirname, '../../client/public/another-page.html'));
});

router.get('/characters', function(req, res){
	res.json({success: true, data: sesame_street_characters});
});

//exporting routes to be imported in our server.js
module.exports = router;
