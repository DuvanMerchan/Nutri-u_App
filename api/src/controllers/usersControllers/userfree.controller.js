const { User } = require("../../db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js')
const nodemailer = require("nodemailer")
const { HOST_EMAIL, PORT_EMAIL, EMAIL, EMAIL_PASS, DB_HOST, DB_PORT } = process.env;


const changeToPremium = () =>{

}

const listFavoritesRecipes = ()=>{

}

const update = ()=>{
        //User.update({ where: { email: email } })

    
    // .then(userx=>{
    //     console.log("user",userx[0])
    //     if(!userx) throw new Error('user not found');
    //     if(userx.emailVerified) throw new Error('user already verified');
    //     userx.emailVerified = true
        
    // }
}
module.exports = {
    changeToPremium,
    listFavoritesRecipes
}