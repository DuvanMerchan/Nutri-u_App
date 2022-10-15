const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('payment', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        paymenthID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        succesfull: { 
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        // startDate:{
        //     type: DataTypes.DATEONLY,         /*  2021-07-06.  */
        //     allowNull: false,               
        // }
    }, {
        timestamps: true,
    });
};