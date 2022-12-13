const Rate = require('../models/Rate');

const getRate = async (userId, resId) =>{
    try {
        const rate = await Rate.findAll({
            where:{
                userId: userId,
                resId: resId,
            }
        });
        return rate;
    } catch (error) {
        throw error;
    }
}

const createRate = async (data) => {
    try{
        const valid = await Rate.findOne({
            where:{
                userId:data.userId,
                resId:data.resId,
            }
        });
        if (valid){
            throw new Error("Rate is existed");
        }
        const createRate = await Rate.create(data);
        return createRate;
    } catch (error){
        throw error;
    }
}

const deleteRate = async (userId, resId) => {
    try{
        const valid = await Rate.findOne({
            where:{
                userId: userId,
                resId: resId,
            }
        });
        if(!valid){
            throw new Error("Rate not found");
        }
        await Rate.destroy({
            where:{
                userId:userId,
                resId: resId,
            }
        })
    } catch (error){
        throw error;
    }
}


module.exports = {
    getRate,
    createRate,
    deleteRate,
}