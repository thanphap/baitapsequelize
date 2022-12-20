const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    return sequelize.define(
        'OrderFood',
        {
            userId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                field: "user_id",
            },
            foodId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
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
}

