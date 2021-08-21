const Sale = require("../models/sale");
const Product = require("../models/product");
const User = require("../models/user");
const product = require("../models/product");

const registerSale = async (req, res) => {

    if(!req.body.price) return res.status(401).send("process failed: incomplete data");
    
    let existingId = await Sale.findOne({_id:Sale._id});
    if(existingId) return res.status(401).send("process failed: the sale is already register");

    // let  user= await User.findOne({name: "Manuel"});
    // if(!user) return res.status(400).send("process failed: no user was assigned");

    // let product = await Product.findOne({name: "Battlefield"});
    // if(!product)return res.status(400).send("process failed: no product was assigned");



    let sale = new Sale({

        idProduct: req.body.idProduct,
        idUser: req.body.idUser,
        price: req.body.price,
        dbStatus: true,
    });
    
    let result = await sale.save();
    if(!result) return res.status(401).send("failed to register sale");
    return res.status(200).send({sale});

}

const listSale = async (req,res) => {

    let sale = await Sale.find().populate('idUser',{_id:0,name:1, email:1}).populate("idProduct",{_id:0}).exec();
    if(!sale || sale.length === 0) return res.status(401).send("No sale");
    return res.status(200).send({sale});
}

module.exports = {registerSale,listSale};


