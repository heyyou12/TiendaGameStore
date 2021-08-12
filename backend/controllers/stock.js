const Stock = require("../models/stock");
const Product = require("../models/product");

const registerStock = async (req,res) => {
    if(!req.body.amount || !req.body.warehouse) return res.status(401).send("process failed: incomplete data");
    
    let existingStock = await Stock.findOne({warehouse: req.body.warehouse});
    if(existingStock) return res.status(401).send("the winery already exists");

   let stock = new Stock({

        idProducto: Product._id,
        amount: req.body.amount,
        warehouse: req.body.warehouse,
        dbStatus: true,

   });
    
   let result = await stock.save();
   if(!result) return res.status(401).send("failed to register stock");
   return res.status(200).send({stock})
}

const listStock = async (req,res) => {
    
    let stock = await Stock.findOne();
    if(!stock || stock.length === 0)return res.status(401).send("No stock").populate("idProduct").exec();
    return res.status(200).send({stock});
}

module.exports = {registerStock,listStock};

