const Product = require("../models/product");

const registerProduct = async (req, res) => {

    if(!req.body.name || !req.body.price || !req.body.code || !req.body.description) return res.status(401).send("process faile: incomplete data");

    const product = new Product({

        name:req.body.name,
        price:req.body.price,
        code:req.body.code,
        description:req.body.description,
        dbStatus: true,

    });

    const result =await product.save();
    if(!result) return res.status(401).send("failed to register product");
    return res.status(200).send({product})

}

const listProduct = async (req, res) => {

    const product = await Product.find({name: new RegExp(req.params["name"],"i")});
    if(!product || product.length === 0) return res.status(401).send("No product");
    return res.status(200).send({product})

}

module.exports = {registerProduct,listProduct};
