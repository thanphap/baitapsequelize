const express = require("express");
const { getRate, createRate, deleteRate } = require("../../controllers/rate.controller");

const rateRouter = express.Router();

rateRouter.get("/:userId&:resId",getRate());
rateRouter.post("", createRate());
rateRouter.delete("/:userId&:resId",deleteRate());

module.exports = rateRouter;