const orderService = require('../services/order.service');

const getOrder = () => { 
    return async (req, res) => { 
        try {
            const {userId, foodId} = req.params;
            const order = await orderService.getOrder(userId, foodId);
            res.status(200).json({data: order});
        } catch (error) {
            res.ststus(500).json({error: error.message});
        }
     }
 }

 const createOrder  = () => {
    return async (req, res) => { 
        try {
            const order = req.body;
            const createOrder = await orderService.createOrder(order);
            res.status(200).json({data: createOrder});
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }
 }

 const deleteOrder = () => {
    return async (req, res) => { 
        try {
            const {userId, foodId} = req.params;
            const deleteOrder = await orderService.deleteOrder(userId, foodId);
            res.status(200).json({data: true});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
     }
 }

 module.exports = {
    getOrder,
    createOrder,
    deleteOrder,
 }