const printDate = function () {
    let today = new Date();
    // let date = today.getFulYear()+ "-"+(today.getMonth()+1)+"-"+ today.getDate()
    console.log(today)
}
module.exports.printDate = printDate


const printMonth = function() {
    let d = new Date()
    let month = (d.getMonth(d)+1)
    console.log( "The current month is -" +month)
}
module.exports.printMonth = printMonth


const getBatchInfo = function() {
    console.log("Radon, W3D3, the topic for today is Nodejs module system")
}
module.exports.getBatchInfo = getBatchInfo