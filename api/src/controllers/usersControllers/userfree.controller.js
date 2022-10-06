const { User } = require("../../db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js')
const nodemailer = require("nodemailer")
const { HOST_EMAIL, PORT_EMAIL, EMAIL, EMAIL_PASS, DB_HOST, DB_PORT } = process.env;


const changeToPremium = () =>{

}
module.exports = {
    changeToPremium,
   
  //Registro
  async singIn(req, res, next) {
    //crear un registro
    const {username, email, password} = req.body;

    let passwordCryp = bcrypt.hashSync(password, Number.parseInt(authConfig.rounds))



    try {

    const usernameCreate = await User.findOne({where:{username:username}})
    const emailCreate = await User.findOne({where:{email:email}})
    
    if(usernameCreate){
        res.status(400).send({message:"Username already exits"})
    }
    else if(emailCreate){
        res.status(400).send({message:"Email already exits"})
    }
    else if(!usernameCreate && !emailCreate){
    User.create({
        username:username, 
        email:email, 
        password: passwordCryp
    })
    .then(user=>sendConfirmationEmail(user))
    .then(user=>user)
    res.send()
}
    
    } catch (err) {
        res.send(next(err))
    }

    

},

    
    confirmAccount(req,res){
    // confirmar cuenta controller
        try {
            confirmAccount2(req.params.token)
            .then(()=>{
                res.status(200).send({succes:true,message:'user confirmed succesfully'})
            }).catch(err =>res.status(200).send({succes:false, message:err.message}))
        } catch (err) {
            res.status(500).send({succes:false, error:err.message})
        }
    }
}



 async function confirmAccount2(token){
    var email = null
    try {
        const payload = jwt.verify(token, authConfig.secret)
        email = payload.email
        
    } catch (err) {
        throw new Error('Invalid token')
    }

    User.update({ emailVerified: true}, {
        where: {
          email: email
        }
      })
    
    //User.update({ where: { email: email } })

    
    // .then(userx=>{
    //     console.log("user",userx[0])
    //     if(!userx) throw new Error('user not found');
    //     if(userx.emailVerified) throw new Error('user already verified');
    //     userx.emailVerified = true
        
    // }) 
}