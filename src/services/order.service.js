const Order = require('../models/Order');

const getOrder = async (userId, foodId) => {
    try {
        const order = await Order.findAll({
            where: {
                userId: userId,
                foodId: foodId,
            }
        });
        return order;
    } catch (error) {
        throw error;
    }
}

const createOrder = async (data) => {
    try {
        const valid = await Order.findOne({
            where: {
                userId: data.userId,
                foodId: data.foodId,
            }
        });
        if (valid) {
            throw new Error("Order is existed");
        }
        const createOrder = await Order.create(data);
        return createOrder;
    } catch (error) {
        throw error;
    }
}

const updateOrder = async(data, userId, foodId) => {
    try {
        const valid = await Order.findOne({
            where:{
                userId: userId,
                foodId: foodId,
            }
        });
        if (!valid) {
            throw new Error("Order not found");
        }
        await Order.update(data, {
            where:{
                userId: userId,
                foodId: foodId,
            }
        })

        const order = await Order.findOne({
            where:{
                userId: userId,
                foodId: foodId,
            }
        });

        return order;

    } catch (error) {
        throw error;
    }
}

const deleteOrder = async (userId, foodId) => {
    try {
        const valid = await Order.findOne({
            where: {
                userId: userId,
                foodId: foodId,
            }
        });
        if (!valid) {
            throw new Error("Order not found");
        }
        await Order.destroy({
            where: {
                userId: userId,
                foodId: foodId,
            }
        })
    } catch (error) {
        throw error;
    }
}



module.exports = {
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
}