const express = require("express");
const { getLikes, deleteLike, createLike, updateLike } = require("../../controllers/like.controller");

const likeRouter = express.Router();

likeRouter.get("/:userId&:resId", getLikes());
likeRouter.post("", createLike());
likeRouter.put("/:userId&:resId", updateLike());
likeRouter.delete("/:userId&:resId",deleteLike());

module.exports = likeRouter;