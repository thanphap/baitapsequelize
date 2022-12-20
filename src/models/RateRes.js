const { DataTypes, Sequelize } = require("sequelize");
module.exports = (sequelize) => {
    return sequelize.define(
        'RateRes',
        {
            userId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                field: "user_id",
            },
            resId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                field: "res_id",
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            dateRate: {
                type: DataTypes.DATE,
                field: 'date_rate',
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            }
        },
        {
            tableName: 'rate_res',
            timestamps: false,
        }
    )
}

