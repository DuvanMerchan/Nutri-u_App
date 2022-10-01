const { User } = require("../../db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js')

module.exports = {
    //Login
  singIn(req, res) {

    let {email, password} = req.body

    User.findOne({
        where:{
            email:email
        }
    }).then(user=>{

        if(!user){
            res.status(404).json({msg:'Usuario con este correo no encontrado'})
        }else{
            if(bcrypt.compareSync(password, user.password)){
                let token = jwt.sign({user:user}, authConfig.secret, {
                    expiresIn: authConfig.expires}) 
                res.json({
                    user:user,
                    token:token
                });
            }else{
                res.status(401).json({msg: 'contraseña incorrecta'})
            }
        }
    }).catch(err=>{
        res.status(500).json(err)
    })
  },
  //Registro
  singUp(req, res) {
    //crear un registro
    const {username, email, password} = req.body;

    let passwordCryp = bcrypt.hashSync(password, Number.parseInt(authConfig.rounds))

    User.create({
        username:username, 
        email:email, 
        password: passwordCryp
    }).then(user =>{
        let token = jwt.sign({user:user}, authConfig.secret, {
        expiresIn: authConfig.expires}) 
    res.json({
        user:user,
        token:token
    });
}).catch(err=>{ res.status(500).json(err)})},
}