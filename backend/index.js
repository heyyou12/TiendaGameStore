const express = require("express");
const cors = require("cors");
const {dbConnection} = require("./db/db");
const Product = require("./routes/product");
const User = require("./routes/user");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/product",Product);
app.use("/api/user",User);

app.listen(process.env.PORT,()=> console.log("server running through port on", process.env.PORT));

dbConnection();

