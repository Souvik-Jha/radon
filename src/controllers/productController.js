const productModel= require("../models/productModel.js")

let createProduct = async function (req,res){
    let data = req.body
    let saveProduct = await productModel.create(data)
    res.send({msg: saveProduct})

}
module.exports.createProduct= createProduct