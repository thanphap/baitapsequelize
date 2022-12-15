const rateService = require('../services/rate.service');

const getRate = () => { 
    return async (req, res) => { 
        try {
            const {userId, resId} = req.params;
            const rate = await rateService.getRate(userId, resId);
            res.status(200).json({data: rate});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
     }
 }

 const createRate  = () => {
    return async (req, res) => { 
        try {
            const rate = req.body;
            const createRate = await rateService.createRate(rate);
            res.status(200).json({data: createRate});
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }
 }

 const updateRate = () => {
    return async (req, res) => {
        try {
            const { userId, resId } = req.params;
            const rate = req.body
            const updateRate = await rateService.updateRate(rate, userId, resId);
            res.status(200).json({ data: updateRate });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

 const deleteRate = () => {
    return async (req, res) => { 
        try {
            const {userId, resId} = req.params;
            const deleteRate = await rateService.deleteRate(userId, resId);
            res.status(200).json({data: true});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
     }
 }

 module.exports = {
    getRate,
    createRate,
    updateRate,
    deleteRate,
 }