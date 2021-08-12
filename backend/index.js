const express = require("express");
const cors = require("cors");
const {dbConnection} = require("./db/db");
const Product = require("./routes/product");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/product",Product);

app.listen(process.env.PORT,()=> console.log("server running through port on", process.env.PORT));

dbConnection();

