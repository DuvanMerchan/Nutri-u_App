const { Router } = require("express");
const { adminLogin, adminSingIn, usersList, userByName, userByid, userBanned } = require("../../controllers/usersControllers/admin.controllers");

//Middleware

const auth = require('../../middlewares/auth')

// Importar todos los routers;

const router = Router();

//router.post('/singin',adminControllers.singIn)
router.post('/login', async(req,res)=>{
    let {email, password} = req.body
    let admin = await adminLogin(email, password)
    res.json({
        admin:admin.user.username,
        token:admin.token})
})

router.post('/singin', async(req,res)=>{
    let {email, username, password} = req.body
    let admin = await adminSingIn(email, username, password)
    res.json({
        admin:admin.user.username,
        token:admin.token})
})

router.get('/search',auth, async(req,res)=>{
    
    let {username} = req.query
    try {
        if(!username){
        let users = await usersList()

        res.json(users)
        }else{
            let users = await userByName(username)
            res.json(users)
        }    
    } catch (error) {
        console.log(error) 
    }})

router.get('/search/:id'), async (req,res)=>{
    try {
        console.log('lol')
        let { id } = req.params;
        console.log('id1',id)
        let user = await userByid(id)
        res.json(user) 
    } catch (error) {
        console.log(error) 
    }
}

// router.put('/search/:id', async(req,res)=>{
//     let { id } = req.params;
//     let user = await userBanned(id)
//     return(`User ${user.username} banned`)
// })


module.exports = router;