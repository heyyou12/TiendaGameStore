const Sale = require("../models/sale");
const Product = require("../models/product");
const User = require("../models/user");

const registerSale = async (req, res) => {

    if(!req.body.price) return res.status(401).send("process failed: incomplete data");
    
    let existingId = await Sale.findOne({_id:Sale._id});
    if(existingId) return res.status(401).send("process failed: the sale is already register");

    let sale = new Sale({

        idProduct: Product._id,
        idUser: User._id,
        price: req.body.price,
        dbStatus: true,
    });
    
    let result = await sale.save();
    if(!result) return res.status(401).send("failed to register sale");
    return res.status(200).send({sale});

}

const listSale = async (req,res) => {

    let sale = await Sale.find();
    if(!sale || sale.length === 0) return res.status(401).send("No sale").populate("idProducto").exec();
    return res.status(200).send({sale});
}

module.exports = {registerSale,listSale};
