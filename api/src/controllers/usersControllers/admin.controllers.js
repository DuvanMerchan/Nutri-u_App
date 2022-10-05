const { User } = require("../../db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js')

const adminSingIn = async (email, username, password) =>{

    try {
        let passwordCryp = bcrypt.hashSync(password, Number.parseInt(authConfig.rounds))

        let newAdmin = await User.create({
            username:username, 
            email:email, 
            password: passwordCryp,
            admin: true
        })
        let token = jwt.sign({user:newAdmin}, authConfig.secret, {
            expiresIn: authConfig.expires}) 
            return({
                user:newAdmin,
                token:token
            })
    } catch (error) {
        console.log(error)
    }}

const adminLogin = async (email, password) =>{
   try {
    let user = User.findOne({
        where:{
            email:email
        }})

    if(!user) throw new Error ('admin not found')
    console.log(user)
    return(user)
   } catch (error) {
    
   }
}

const usersList = async () => {

}

module.exports = {
    adminLogin,
    adminSingIn,
    usersList
}