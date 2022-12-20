const { response } = require("../helpers/response");
const foodService = require("../services/food.service")
const orderFood = () => {
	return async (req, res, next) => {
        try {
            const { foodId } = req.params;
            const order = req.body;
            await foodService.orderFood(order, foodId);
            res.status(200).json(response("OK"));
        } catch (error) {
            next(error);
        }
    };
}

module.exports = {
    orderFood,
}