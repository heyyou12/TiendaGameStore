const mongoose = require("mongoose");

const saleSchema = mongoose.Schema({

    idProduct: {type: mongoose.Schema.ObjectId, ref: "product"},
    idUser: {type: mongoose.Schema.ObjectId, ref: "user"},
    price:String,
    date: {type: Date, default: Date.now},
    dbStatus: Boolean,

})

const sale = mongoose.model("sale",saleSchema);
module.exports = sale;