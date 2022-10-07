const { Router } = require("express");
const { User } = require('../../db')
const usersRoutes = require('./users');
const adminRoutes = require('./admin');
const { userLogin, userSingIn, confirmAccount } = require("../../controllers/usersControllers/users.controllers");
const { changeToPremium } = require('../../controllers/usersControllers/userfree.controller')


// Importar todos los routers;

const router = Router();

router.use('/users', usersRoutes)
router.use('/admin', adminRoutes)
router.post('/singin', userSingIn)
router.post('/login', async (req,res)=>{
    let {email, password} = req.body
    let user = await userLogin(email,password)
    res.json({
        user:user.username,
        token:user.token
    })})
router.get('/confirm/:token',confirmAccount)

router.post('/premium', (req,res) =>{
    let {userId} = req.body
    changeToPremium(userId)
})

module.exports = router;