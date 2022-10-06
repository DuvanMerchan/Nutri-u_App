const { Router } = require("express");
const usersRoutes = require('./users');
const adminRoutes = require('./admin');
const { userLogin, userSingIn } = require("../../controllers/usersControllers/users.controllers");


// Importar todos los routers;

const router = Router();

router.use('/users', usersRoutes)
router.use('/admin', adminRoutes)
router.post('/singin', async (req,res)=>{
    const {username, email, password} = req.body;
    let user = await userSingIn(username, email, password)
    res.json({
        user:user.username,
        token:user.token
    })
})
router.post('/login', async (req,res)=>{
    let {email, password} = req.body
    let user = await userLogin(email,password)
    res.json({
        user:user.username,
        token:user.token
    })})

module.exports = router;