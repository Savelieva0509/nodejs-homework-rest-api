const express = require("express");

const controller = require("../../controllers/auth")
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");


const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), controller.register);

module.exports = router;
