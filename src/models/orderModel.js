const mongoose = require('mongoose');
const userModel = require('./userModel');
const productModel = require('./productModel');

let ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    userId: {
        type: ObjectId,
        ref: "User"
    },
    isFreeAppUser: {
        type: Boolean,
        default: false
    },
    productId: {
        type: ObjectId,
        ref: "Product"
    },
	amount: Number,
	date: String
   
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)