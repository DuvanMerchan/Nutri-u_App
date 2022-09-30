const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('diet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
};