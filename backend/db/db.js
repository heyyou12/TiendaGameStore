const mongoose = require("mongoose");

const dbConnection = async () => {

    try {
            await mongoose.connect(process.env.BD_CONNECTION,{
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex:true,
                useUnifiedTopology:true,
            });
            console.log("Successful connection to Mongodb");
        
    } catch (error) {
        console.log("Error in the connection to the database");
        throw new Error ("Error in the connection to the database")
    }

};

module.exports = {dbConnection};