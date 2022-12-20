const { response } = require("../helpers/response");
const userService = require("../services/user.service");

const getUser = () => {
    return async (req, res, next) => { 
        try {
            const users = await userService.getUser();
            res.status(200).json(response(users));
        } catch (error) {
            next(error);
        }
     };
};

const foodUser = () => {
	return async (req, res, next) => {
        try {
            const { userId } = req.params;
            const order = req.body;
            await userService.foodUser(order, userId);
            res.status(200).json(response("OK"));
        } catch (error) {
            next(error);
        }
    };
};

module.exports = {
    getUser,
	foodUser,
}