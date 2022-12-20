const express = require("express");
const { orderFood } = require("../../controllers/food.controller");

const foodRouter = express.Router();

foodRouter.post("/:foodId/order", orderFood());

module.exports = foodRouter;