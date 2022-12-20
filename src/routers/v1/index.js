const express = require("express");
const restaurantRouter = require("./restaurant.router");
const userRouter = require("./user.router");
const foodRouter = require("./food.router");

const v1 = express.Router();

v1.use('/users',userRouter);
v1.use('/restaurants', restaurantRouter);
v1.use('/foods', foodRouter);
module.exports = v1; 