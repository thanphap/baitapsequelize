const express = require("express");
const likeRouter = require("./like.router");
const rateRouter = require("./rate.router");
const orderRouter = require("./order.router");

const v1 = express.Router();
v1.use('/like', likeRouter);
v1.use('/rate', rateRouter);
v1.use('/order', orderRouter);
module.exports = v1; 