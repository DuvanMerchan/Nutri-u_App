const { User } = require("../../db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js')

const   userSingIn = async (username, email, password) => {
    //crear un registro
    try {
        let passwordCryp = bcrypt.hashSync(password, Number.parseInt(authConfig.rounds))

        let newUser = await User.create({
            username:username, 
            email:email, 
            password: passwordCryp
        })
            let token = jwt.sign({user:newUser}, authConfig.secret, {
            expiresIn: authConfig.expires}) 
        return({
            user:newUser,
            token:token  
    })
    } catch (error) {
        
    }

}

const userLogin = async (email, password) =>{
   try {
    let user = await User.findOne({
        where:{
            email:email
        }})

    if(!user){
        throw new Error ('admin not found')
    }else{
        if(bcrypt.compareSync(password, user.password)){
            let token = jwt.sign({user:user}, authConfig.secret, {
                expiresIn: authConfig.expires})
            return({
                user:user,
                token:token
            })}else{
                throw new Error('Incorrect password')
            }}
   } catch (error) {
    console.log(error)
   }
}

module.exports ={
    userSingIn,
    userLogin,
}