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
                len:[1,255],
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password:{
            allowNull: false,
            type:DataTypes.STRING,
        },
        banned:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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
        },
        emailVerified:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        logged:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: false,
    });
};