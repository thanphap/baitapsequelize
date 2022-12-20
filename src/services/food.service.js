const { AppError } = require("../helpers/error");
const { Food, User } = require("../models");

const orderFood = async (order, foodId) => {
    try {
        const user = await User.findByPk(order.userId);
        if (!user) {
            throw AppError(400, "user not found");
        }

        const food = await Food.findByPk(foodId);
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
    orderFood,
};
