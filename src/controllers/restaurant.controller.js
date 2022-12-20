const { response } = require("../helpers/response");
const restaurantService = require("../services/restaurant.service");

const getRestaurant = () => {
    return async (req, res, next) => {
        try {
            const restaurants = await restaurantService.getRes();
            res.status(200).json(response(restaurants));
        } catch (error) {
            next(error);
        }
    }
}

const likeRestaurant = () => {
    return async (req, res, next) => {
        try {
            const { resId } = req.params;
            const { userId } = req.body;
            await restaurantService.likeRes(userId, resId);
            res.status(200).json(response("OK"));
        } catch (error) {
            next(error);
        }
    };
};

const RateRestaurant = () => {
    return async (req, res, next) => {
        try {
            const { resId } = req.params;
            const rate = req.body;
            await restaurantService.rateRes(rate, resId);
            res.status(200).json(response("OK"));
        } catch (error) {
            next(error);
        }
    };
};

module.exports = {
    getRestaurant,
    likeRestaurant,
    RateRestaurant,
}