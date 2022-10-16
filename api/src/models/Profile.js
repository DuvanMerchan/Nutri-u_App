const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('profile', {
        
        imgperfil:{
            type: DataTypes.STRING,
            defaultValue: "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
        },
        peso:{
            type: DataTypes.TEXT,
            
        },
        altura:{
            type: DataTypes.TEXT,
            
        },
        imc:{
            type: DataTypes.TEXT,
            
        },
    }, {
        timestamps: true,
    });
};