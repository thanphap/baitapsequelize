const { DataTypes } = require("sequelize");
const sequelize = require('./index');

const Like = sequelize.define(
    'Like',
    {
        userId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            field: "user_id",
        },
        resId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            field: "res_id",
        },
        dateLike:{
            type:DataTypes.DATE,
            field: 'date_like',
            allowNull:false,
        }
    },
    {
        tableName: 'like_res',
        timestamps: false,
    }
)

module.exports = Like;