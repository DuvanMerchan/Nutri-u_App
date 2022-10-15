const {Router} = require('express');
const { userInfo } = require('../../controllers/usersControllers/users.controllers');
const { changeToPremium } = require('../../controllers/usersControllers/userfree.controller');
const auth = require('../../middlewares/auth');
const router = Router()

const routeFavorite = require('./favorites')

router.use('/myfavorite', routeFavorite)

// router.patch('/premium', (req,res) =>{
//     let user = changeToPremium()
// })
//router.post('/login',userFreeControllers.login)
// router.post('/singin',userFreeControllers.singIn)

router.get('/me/:id',auth ,async (req, res) =>{
    let {id } = req.params;
    let user = await userInfo(id)
    res.json(user)
})


module.exports = router;