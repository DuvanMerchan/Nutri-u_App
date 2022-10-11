const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('ranking' ,{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        ranking: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min:0,
                max:100
            }
        },
    },
    {timestamps: false,}
    )
}