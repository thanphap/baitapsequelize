const express = require("express");
const { getUser, foodUser} = require("../../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("", getUser());
userRouter.post("/:userId/order", foodUser());
module.exports = userRouter;