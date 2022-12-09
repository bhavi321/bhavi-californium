const express = require('express');
const router = express.Router();
const helperfn= require('../helper-function')
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.get('/test-you', function(req,res){
    console.log('my name is',helperfn.greet)
    helperfn.greet('')
    res.send('This is my firsdt ever api!')
});
module.exports = router;
