const express = require("express");
const { getRate, createRate, deleteRate, updateRate } = require("../../controllers/rate.controller");

const rateRouter = express.Router();

rateRouter.get("/:userId&:resId", getRate());
rateRouter.post("", createRate());
rateRouter.put("/:userId&:resId", updateRate());
rateRouter.delete("/:userId&:resId", deleteRate());


module.exports = rateRouter;