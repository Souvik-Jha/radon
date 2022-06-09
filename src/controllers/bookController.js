const authorModel = require("../models/authorModel")
const { required } = require("nodemon/lib/config")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    let authorId=await authorModel.findById(book.author)
    let publisherId = await publisherModel.findById(book.publisher)
    if(!book.author){
    res.send("author details are required")
    } else if( !authorId){
    res.send("author is not present")
    }else if(!book.publisher) {
    res.send("publisher details are required")
    }else if(!publisherId){
    res.send("publisher is not present")
    }else{
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
    }
}


const getBooks = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author','publisher'] )
    res.send({data: specificBook})
}

const hardCoverTrue =async function(req,res) {
    let firstUpdate= await bookModel.updateMany({},{isHardCover:false})
    let updateCover= await bookModel.updateMany(
        {$or:[{publisher:"62a1c145f8dd1f232c579049"},{publisher:"62a1de9e337da8bd7a935862"}]},
        {$set:{isHardCover:true}},
        )
    let UpdatedBook = await bookModel.updateMany(
    )
    res.send({data: updatedBook})
}


module.exports.createBook= createBook
module.exports.getBooks = getBooks
module.exports.hardCoverTrue = hardCoverTrue
