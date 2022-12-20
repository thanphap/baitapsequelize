const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('baitapsql', 'root', '1234', {
    dialect: "mysql",
    host: 'localhost',
    port: 3306,
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Sequelize Connected");
    } catch (error) {
        console.log("Sequelize Error", error);
    }
})();

const User = require("./User")(sequelize);
const Restaurant = require("./Restaurant")(sequelize);
const Food = require("./Food")(sequelize);
const LikeRes = require("./LikeRes")(sequelize);
const RateRes = require("./RateRes")(sequelize);
const OrderFood = require("./OrderFood")(sequelize);

User.belongsToMany(Restaurant, {
    as: "restaurantLikes",
    through:  LikeRes,
    foreignKey: "userId",
});

Restaurant.belongsToMany(User, {
    as: "userLikes",
    through:  LikeRes,
    foreignKey: "resId",
});


User.belongsToMany(Restaurant, {
    as: "restaurantRates",
    through:   RateRes,
    foreignKey: "userId",
});

Restaurant.belongsToMany(User, {
    as: "userRates",
    through:  RateRes,
    foreignKey: "resId",
});

User.belongsToMany(Food, {
    as: "foodOrders",
    through:   OrderFood,
    foreignKey: "userId",
});

Food.belongsToMany(User, {
    as: "userOrders",
    through:  OrderFood,
    foreignKey: "foodId",
});


module.exports = {
    sequelize,
    User,
    Restaurant,
	Food,
};

