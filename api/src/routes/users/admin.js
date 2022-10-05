const { Router } = require("express");
const { adminLogin, adminSingIn } = require("../../controllers/usersControllers/admin.controllers");

// Importar todos los routers;

const router = Router();

//router.post('/singin',adminControllers.singIn)
router.post('/login', async(req,res)=>{
    let {email, password} = req.body
    let admin = await adminLogin(email, password)
    console.log('admin1',admin)
})

router.post('/singin', async(req,res)=>{
    let {email, username, password} = req.body
    let admin = await adminSingIn(email, username, password)
    console.log('admin',admin)
    console.log('token',admin.token)
    res.json(admin.token)
})

router.get('/',(req,res)=>{
    res.json('hola')
} )

module.exports = router;