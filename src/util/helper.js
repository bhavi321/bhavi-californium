function printDate(){
var a= new Date()
console.log(a)
}
function printMonth(){
var b= new Date()
    console.log(b.getMonth() + 1)
}
function getBatchInfo(){
    console.log("Californium, W3D4, the topic for today is Nodejs module system")
}

module.exports.myDate= printDate
module.exports.myMonth= printMonth
module.exports.myBatch= getBatchInfo