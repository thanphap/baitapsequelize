const likeService = require("../services/like.service");

const getLikes = () => {
    return async (req, res) => {
        try {
            const {userId, resId} = req.params;
            const likes = await likeService.getLikes(userId, resId);
            res.status(200).json({ data: likes });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

const createLike = () => {
    return async (req, res) => { 
        try {
            const like = req.body;
            const createLike = await likeService.createLike(like);
            res.status(200).json({ data: createLike});
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
     };
};

const updateLike = () => {
    return async (req, res) => {
        try {
            const {userId, resId} = req.params;
            const like = req.body
            const updateLike = await likeService.updateLike(like, userId, resId);
            res.status(200).json({ data: updateLike });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

const deleteLike  = () => {
    return async (req, res) =>{
        try {
           const {userId, resId} = req.params;
           const deleteLike = await likeService.detleteLike(userId, resId);
           res.status(200).json({data: true});
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }
}

module.exports = {
    getLikes,
    createLike,
    updateLike,
    deleteLike,
}