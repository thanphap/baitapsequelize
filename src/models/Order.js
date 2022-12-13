const { DataTypes } = require("sequelize");
const sequelize = require('./index');

const Order = sequelize.define(
    'Order',
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            field: "user_id",
        },
        foodId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            field: "food_id",
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        arrSubId: {
            type: DataTypes.STRING,
            field: "arr_sub_id",
            allowNull: false,
        }

    },
    {
        tableName: 'order',
        timestamps: false,
    }
)

module.exports = Order;