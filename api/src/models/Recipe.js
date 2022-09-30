const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('recipe', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
};