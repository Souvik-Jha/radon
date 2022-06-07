const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const AuthorController= require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook  )

router.post("/createAuthor", AuthorController.createAuthor  )

router.get('/getBookName', BookController.getBookName)

router.get('/getAuthor', BookController.getAuthor)

router.get('/getBooks', BookController.getBooks)

// router.get("/bookList", BookController.bookList)

// router.post("/getBooksInYear", BookController.getBooksInYear)

// router.post("/getParticularBooks", BookController.getParticularBooks)

// router.get("/getXINRBooks", BookController.getXINRBooks)

// router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;