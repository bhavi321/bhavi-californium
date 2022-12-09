const express = require('express');
const router = express.Router();
const helperfn= require('../helper-function')
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.get('/test-you', function(req,res){
    console.log('my name is bhavi')
    helperfn.greet('a')
    res.send('This is my first ever api!')
});
module.exports = router;
