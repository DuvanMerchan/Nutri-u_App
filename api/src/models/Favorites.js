const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('favorites' ,{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'My favorite'
        },
        userId: {
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
    },
    {timestamps: false,}
    )
}