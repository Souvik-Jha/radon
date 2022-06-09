const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel1= require("../models/authorModel")
const bookModel = require("../models/bookModel")
const { find } = require("../models/bookModel")
const res = require("express/lib/response")

const createBook= async function (req, res) {
    let data1= req.body
    let savedData1= await BookModel.create(data1)
    res.send({msg: savedData1})
}

const getBookName= async function(req,res) {
    let author = await authorModel1.find({author_name:"Chetan Bhagat"})
    let id_num= author[0].author_id
    let bookList= await BookModel.find({author_id: id_num})
    res.send({msg: bookList})
}

const getAuthor = async function(req, res) {
    let updatedBook = await BookModel.findOneAndUpdate({bookName: "Two states"}, {price: 100}, {new: true})
    let author= await authorModel1.find({author_id: updatedBook.author_id}).select({author_name:1, _id:0})

    res.send( {author, updatedBook: updatedBook})
}

const getBooks = async function(req, res) {
    let books= await bookModel.find( { price : { $gte: 50, $lte: 100} } )
    let arr1 = []
    books.forEach(ele => arr1.push(ele.author_id))
    for (let i = 0 ; i < arr1.length; i++) {
        let allAuthor = await authorModel1.find({author_id:arr1[i]}).select({author_name:1,_id:0})
        console.log(allAuthor)
    }
   }

   const authorList = async function(req, res) {
       let author = await authorModel1.find({age:{$gt:50}})
   }



   

// const bookList= async function (req, res) {
//     let allBooks= await BookModel.find().select( { bookName: 1, authorName: 1,_id: 0})
//     res.send({msg: allBooks})
// }


// const getBooksInYear = async function(req, res) {
//     let year = req.body.year
//     let booksInYear = await BookModel.find({year: year})
//     res.send({msg: booksInYear})
// }

// const getParticularBooks = async function(req, res) {
//     let condition = req.body
//     let booksInYear = await BookModel.find(condition)
//     res.send({msg: booksInYear})
// }

// const getXINRBooks = async function (req, res) {
//     let booksINR = await BookModel.find({$or: [{"prices.indianPrice": "500INR"}, {"prices.indianPrice": "200INR"}, {"prices.indianPrice": "100INR"}]})
//     res.send({ msg: booksINR })
// }

// const getRandomBooks= async function (req, res) {
//     let randomBooks= await BookModel.find({$or: [{stockAvalable: true}, {totalPages:{$gt: 500}}]})
//     res.send({msg: randomBooks})
// }

    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
    // let a= 2+4
    // a= a + 10
    // console.log(a)
    // let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
//     console.log(allBooks)
//     let b = 14
//     b= b+ 10
//     console.log(b)
//     res.send({msg: allBooks})
// }


module.exports.createBook = createBook
module.exports.getBookName = getBookName
module.exports.getAuthor = getAuthor
module.exports.getBooks = getBooks
// module.exports.bookList= bookList
// module.exports.getBooksInYear= getBooksInYear
// module.exports.getParticularBooks= getParticularBooks
// module.exports.getXINRBooks= getXINRBooks
// module.exports.getRandomBooks= getRandomBooks