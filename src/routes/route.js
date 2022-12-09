const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const welcome= require('../logger/logger')
const date =  require('../util/helper')
const format= require('../validator/formatter')
const lodash1 = require('lodash')
router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)
    
    

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)

    welcome.myWelcome("Bhavi")

    date.myDate()
    date.myMonth()
    date.myBatch()

    format.myTrim()
    format.myLowerCase()
    format.myUpperCase()

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
console.log(lodash1.chunk(months,3))
const oddNos = [1,3,5,7,9,11,13,15,17,19]
console.log(lodash1.tail(oddNos))
const arr1=[1,1,2,2]
const arr2=[3,3,2,4]
const arr3=[5,1,2,6]
const arr4=[1,7,3,7]
const arr5=[9,7,8,8,8]
console.log(lodash1.union(arr1,arr2,arr3,arr4,arr5))

let myObj= lodash1.fromPairs([['Horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']])
console.log(myObj)
    res.send('any dummy text')
});

router.get('/movies',function(req,res){
    let a= ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
console.log(a)
res.send(a)
});
router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
});


module.exports = router;