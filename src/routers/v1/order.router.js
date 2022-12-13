const express = require("express");
const { deleteOrder, createOrder, getOrder } = require("../../controllers/order.controller");

const orderRouter = express.Router();

orderRouter.get("/:userId&:foodId",getOrder());
orderRouter.post("", createOrder());
orderRouter.delete("/:userId&:foodId",deleteOrder());

module.exports = orderRouter;