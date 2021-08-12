const mongoose = require("mongoose");

const stockSchema = mongoose.Schema({

    idProduct: {type:mongoose.Schema.ObjectId, ref: "product"},
    amount: String,
    warehouse:String,
    date:{type: Date, default: Date.now},
    dbStatus: Boolean,
   
})

const stock = mongoose.model("stock", stockSchema);
module.exports = stock;

