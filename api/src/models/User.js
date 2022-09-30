const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('user', {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                isEmail: {
                msg: "Must be a valid e-mail address"},
            }
        },
        admin:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        premium:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        nutricionist:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        guest:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, {
        timestamps: false,
    });
};