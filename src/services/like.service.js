const Like = require('../models/Like');

const getLikes = async (userId, resId) => {
    try {
        const likes = await Like.findAll({
            where: {
                userId: userId,
                resId: resId,
            }
        });
        return likes;
    } catch (error) {
        throw error;
    }
}

const createLike = async (data) => {
    try {
        const like = await Like.findOne({
            where: {
                userId: data.userId,
                resId: data.resId,
            }
        });
        if (like) {
            throw new Error("Like is existed");
        }
        const createLike = await Like.create(data);
        return createLike;

    } catch (error) {
        throw error;
    }
}

const updateLike = async(data, userId, resId) => {
    try {
        const valid = await Like.findOne({
            where:{
                userId: userId,
                resId: resId,
            }
        });
        if (!valid) {
            throw new Error("Order not found");
        }
        await Like.update(data, {
            where:{
                userId: userId,
                resId: resId,
            }
        })

        const like = await Like.findOne({
            where:{
                userId: userId,
                resId: resId,
            }
        });

        return like;

    } catch (error) {
        throw error;
    }
}

const detleteLike = async (userId, resId) => {
    try {
        const like = await Like.findOne({
            where: {
                userId: userId,
                resId: resId,
            }
        });
        if (!like) {
            throw new Error("like not found");
        }
        await Like.destroy({
            where: {
                userId: userId,
                resId: resId,
            }
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getLikes,
    createLike,
    updateLike,
    detleteLike,
}