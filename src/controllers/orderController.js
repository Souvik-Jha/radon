const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")


let createOrder = async function (req,res){
    let productValidation= await productModel.findById(req.body.productId)
    let userValidation = await userModel.findById(req.body.userId)
    if((!productValidation)||(!userValidation)) {
        return res.send("validations fail")
    }else {
    let data = req.body
    let saveOrder = await orderModel.create(data)
    res.send({msg: saveOrder})
    }
}
module.exports.createOrder= createOrder