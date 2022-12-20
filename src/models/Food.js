const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    return sequelize.define(
        'Food',
        {
            foodId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "food_id",
            },
            foodName: {
                type: DataTypes.STRING,
                field: "food_name",
            },
            image: {
                type: DataTypes.STRING,
            },
            price: {
                type: DataTypes.FLOAT,
            },
            desc: {
                type: DataTypes.STRING,
            },
            typeId: {
                type: DataTypes.INTEGER,
                field: "type_id"
            }
        },
        {
            tableName: "food",
            timestamps: false,
        }
    )
}