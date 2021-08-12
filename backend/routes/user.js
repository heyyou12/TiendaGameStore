const express = require("express");
const router = express.Router();
const UserControlller = require("../controllers/user");

router.post("/registerUser",UserControlller.registerUser);
router.get("/listUser/:name?",UserControlller.listUser);

module.exports = router;