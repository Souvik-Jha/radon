const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    catagory: String,
    year: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //books



// String, Number
// Boolean, Object/json, array