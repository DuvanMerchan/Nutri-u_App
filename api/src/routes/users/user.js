const { Router } = require("express");
const { User } = require('../../db')
const usersRoutes = require('./users');
const adminRoutes = require('./admin');
const { userLogin, userSingIn, confirmAccount } = require("../../controllers/usersControllers/users.controllers");


// Importar todos los routers;

const router = Router();

router.use('/users', usersRoutes)
router.use('/admin', adminRoutes)
router.post('/singin', async (req,res)=>{
    const {username, email, password} = req.body;
    const usernameCreate = await User.findOne({where:{username:username}})
    const emailCreate = await User.findOne({where:{email:email}})
    if(usernameCreate){
        res.status(400).send({message:"Username already exits"})
    }
    else if(emailCreate){
        res.status(400).send({message:"Email already exits"})
    }
    else if(!usernameCreate && !emailCreate){
        let user = await userSingIn(username, email, password)
        res.json({
            user:user.username,
            token:user.token
        })
    }
})
router.post('/login', async (req,res)=>{
    let {email, password} = req.body
    let user = await userLogin(email,password)
    res.json({
        user:user.username,
        token:user.token
    })})
router.get('/confirm/:token', async (req,res)=>{
    let {token} = req.params
    confirmAccount(token)
    
})

module.exports = router;