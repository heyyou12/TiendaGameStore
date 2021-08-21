const bcrypt = require("bcrypt");
const User = require("../models/user");

const login = async (req,res) => {

    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(401).send("Incorrect email or password");

    const hash = await bcrypt.compare(req.body.password, user.password);
    if(!hash) return res.status(401).send("Incorrect email or password");

    try {
        
        const jwtToken = user.generateJWT();
        return res.status(200).send({jwtToken});

    } catch (error) {
        return res.status(401).send("login error")
    }
    
};

module.exports = {login};