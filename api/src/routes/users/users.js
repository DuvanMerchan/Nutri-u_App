const {Router} = require('express');
const { changeToPremium } = require('../../controllers/usersControllers/userfree.controller');
const auth = require('../../middlewares/auth');
const router = Router()

const routeFavorite = require('./favorites')

router.use('/myfavoriterecipe', routeFavorite)

// router.patch('/premium', (req,res) =>{
//     let user = changeToPremium()
// })
//router.post('/login',userFreeControllers.login)
// router.post('/singin',userFreeControllers.singIn)

router.get('/me',auth ,async (req, res) =>{
    let { user, token } = req.body;
})


module.exports = router;