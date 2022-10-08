const { Router } = require("express");
const { User } = require('../../db')
const usersRoutes = require('./users');
const adminRoutes = require('./admin');
const { userLogin, userSingIn, confirmAccount } = require("../../controllers/usersControllers/users.controllers");
const { changeToPremium } = require('../../controllers/usersControllers/userfree.controller');
const { json } = require( 'body-parser' );


// Importar todos los routers;

const router = Router();

router.use('/users', usersRoutes)
router.use('/admin', adminRoutes)
router.post('/singin', userSingIn)
router.post('/login', async (req,res)=>{
    console.log(req.body)
    let {email, password} = req.body
    let user = await userLogin(email,password)
    console.log('ESTE ES', user)
    res.json({
        user
    })})
router.get('/confirm/:token',confirmAccount)

router.post('/premium', async (req,res) =>{
    let {userEmail, userName, paymentMethod} = req.body
    let respuesta = await changeToPremium(userEmail, userName, paymentMethod)
    console.log('estoo', JSON.stringify(respuesta))
    res.json({
        respuesta
    })
})

module.exports = router;