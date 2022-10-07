const { User } = require("../../db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js')
const nodemailer = require("nodemailer")
const { HOST_EMAIL, PORT_EMAIL, EMAIL, EMAIL_PASS, DB_HOST, DB_PORT } = process.env;

const   userSingIn = async ( req, res) => {
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
    res.send({message:"User Created, verify your email to confirm"})
}
    
    } catch (err) {
        res.send(next(err))
    }

}

const userLogin = async (email, password) =>{
   try {
    let user = await User.findOne({
        where:{
            email:email
        }})
        console.log(user)
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
// send Email confirmation
function sendConfirmationEmail(user){
    let transporter = nodemailer.createTransport({
        host: `${HOST_EMAIL}`,
        port:`${PORT_EMAIL}`,
        secure:false,
        auth:{
            user:`${EMAIL}`,
            pass:`${EMAIL_PASS}`
        }
    });
    var token = jwt.sign({email:user.email}, authConfig.secret);
    const urlConfirm =`http://${DB_HOST}:${DB_PORT}/user/confirm/${token}`

    return transporter.sendMail({
        from: "nutri.u.contact@gmail.com",
        to: user.email,
        subject:"Please confirm your email Nutri-U",
        html:`<p>Confirm your email <a href="${urlConfirm}">Confirm</a></p>`,
    }).then(()=>user)
}

const confirmAccount = async ( req, res) =>{
    // confirmar cuenta controller
        try {
            confirmAccount2(req.params.token)
            .then(()=>{
                res.status(200).send({succes:true,message:'user confirmed succesfully'})
            }).catch(err =>res.status(200).send({succes:false, message:err.message}))
        } catch (err) {
            console.log(err)
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
          }) }

module.exports ={
    userSingIn,
    userLogin,
    confirmAccount,
}