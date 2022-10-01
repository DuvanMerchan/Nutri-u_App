const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('user', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, 
          },
        username:{
            allowNull: false,
            unique: true,
            type:DataTypes.STRING,
            validate:{
                isAlphanumeric: true,
                len:[2,255],
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                isEmail: true
            }
        },
        password:{
            allowNull: false,
            type:DataTypes.STRING,
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
        free:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, {
        timestamps: false,
    });
};