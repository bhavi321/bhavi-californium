var a="    BhaVi    "
function trim(){
console.log(a.trim())
}
function changeToLowerCase(){
console.log(a.toLowerCase())
}
function changeToUpperCase(){
console.log(a.toLocaleUpperCase())
}

module.exports.myTrim=trim
module.exports.myLowerCase=changeToLowerCase
module.exports.myUpperCase=changeToUpperCase