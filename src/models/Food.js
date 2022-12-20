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
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            desc: {
                type: DataTypes.STRING,
            },
            typeId: {
                type: DataTypes.INTEGER,
                field: "type_id",
                allowNull: false,
            }
        },
        {
            tableName: "food",
            timestamps: false,
        }
    )
}