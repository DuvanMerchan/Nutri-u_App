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

        healthScore: { 
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        image: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        summary: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        // cuisines: { 
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },

        // dishTypes: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },   
        
        createdInDB: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        }, 

        
    },
    {
        timestamps: false,
    });
};