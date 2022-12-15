const { DataTypes } = require("sequelize");
const sequelize = require('./index');

const Rate = sequelize.define(
    'Rate',
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
            allowNull: false,
        }
    },
    {
        tableName: 'rate_res',
        timestamps: false,
    }
)

module.exports = Rate;