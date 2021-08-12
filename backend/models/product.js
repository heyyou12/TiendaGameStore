const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    name: String,
    price:String,
    code:String,
    description:String,
    date:{type:Date, default: Date.now},
    dbStatus:Boolean,
})

const product = mongoose.model("product",productSchema);
module.exports = product;