const { AppError } = require("../helpers/error");
const { Food, User } = require("../models");

const getUser = async() => {
    try {
        const users  = await User.findAll({
            include: [
                {
                    association:"restaurantLikes",
                    through:{
                        attributes:[]
                    },
                },
                {
                    association:"restaurantRates",
                    through:{
                        attributes:[]
                    },
                },
            ],
        });
        return users;
    } catch (error) {
        throw error;
    }
}

const foodUser = async (order, userId) => {
	try {
		const user = await User.findByPk(userId);
        if (!user) {
            throw AppError(400, "user not found");
        }
		
		const food = await Food.findByPk(order.foodId);
        if (!food) {
            throw AppError(400, "food not found");
        }

        console.log(food.__proto__);
        const hasorder = await food.hasUserOrder(user.userId);
        if (hasorder) {
            await food.setUserOrders(user.userId, { through: { amount: order.amount, code: order.code, arrSubId: order.arrSubId } });
        }
        else {
            await food.addUserOrder(user.userId, {through: { amount: order.amount, code: order.code, arrSubId: order.arrSubId}});
        }
	} catch (error) {
        throw error;
    }
}

module.exports = {
    getUser,
	foodUser,
}
