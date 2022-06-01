const string = "  Function Up  "

const trim = function() {
    console.log(string.trim())
}
module.exports.trim = trim


const changetoLowerCase = function () {
    console.log(string.toLowerCase())
}
module.exports.changetoLowerCase = changetoLowerCase


const changetoUpperCase = function() {
    console.log(string.toUpperCase())
}
module.exports.changetoUpperCase = changetoUpperCase