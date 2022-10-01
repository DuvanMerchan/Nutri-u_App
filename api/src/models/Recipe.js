const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('recipe', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },

        vegetarian: { 
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        vegan: { 
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        glutenFree: { 
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        dairyFree: { 
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        veryPopular: { 
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        healthScore: { 
            type: DataTypes.FLOAT,
            allowNull: true,
        },

        image: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        summary: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cuisines: { 
            type: DataTypes.STRING,
            allowNull: true,
        },

        dishTypes: {
            type: DataTypes.STRING,
            allowNull: true,
        },      
    }, {
        timestamps: false,
    });
};