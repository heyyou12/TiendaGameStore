const express = require("express");
const router = express.Router();
const UserControlller = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");


router.post("/registerUser",UserControlller.registerUser);
router.get("/listUser/:name?",Auth,ValidateUser,UserControlller.listUser);

module.exports = router;