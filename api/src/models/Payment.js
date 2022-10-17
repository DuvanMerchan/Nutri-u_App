const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('payment', {
        paymenthID:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
    });
};