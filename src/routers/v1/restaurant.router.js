const express = require("express");
const { likeRestaurant, getRestaurant, RateRestaurant } = require("../../controllers/restaurant.controller");

const restaurantRouter = express.Router();

restaurantRouter.get("", getRestaurant());
restaurantRouter.post("/:resId/like", likeRestaurant());
restaurantRouter.post("/:resId/rate", RateRestaurant());

module.exports = restaurantRouter;