const { AppError } = require("../helpers/error");
const { Restaurant, User } = require("../models");

const getRes = async () => {
    try {
        const restaurants = await Restaurant.findAll({
            include: [
                {
                    association: "userLikes",
                    attributes: {
                        exclude: ["email", "password"],
                    },
                    through: {
                        attributes: []
                    },
                },
                {
                    association: "userRates",
                    attributes: {
                        exclude: ["email", "password"],
                    },
                    through: {
                        attributes: []
                    },
                },
            ]
        });
        return restaurants;
    } catch (error) {
        throw error;
    }
}

const likeRes = async (userId, resId) => {
    try {
        const res = await Restaurant.findByPk(resId);
        if (!res) {
            throw AppError(400, "restaurant not found");
        }

        const user = await User.findByPk(userId);
        if (!user) {
            throw AppError(400, "user not found");
        }
        const hasLiked = await res.hasUserLike(user.userId);
        if (hasLiked) {
            await res.removeUserLike(user.userId);
        }
        else {
            await res.addUserLike(user.userId);
        }

    } catch (error) {
        throw error;
    }
};

const rateRes = async (rate, resId) => {
    try {
        const res = await Restaurant.findByPk(resId);
        if (!res) {
            throw AppError(400, "restaurant not found");
        }

        const user = await User.findByPk(rate.userId);
        if (!user) {
            throw AppError(400, "user not found");
        }

        console.log(res.__proto__);
        const hasRate = await res.hasUserRate(user.userId);
        if (hasRate) {
            await res.setUserRates(user.userId, {through: { amount: rate.amount }});
        }
        else {
            console.log(hasRate);
            await res.addUserRate(user.userId, {through: { amount: rate.amount }});
        }

    } catch (error) {
        throw error;
    }
};

module.exports = {
    getRes,
    likeRes,
    rateRes,
};