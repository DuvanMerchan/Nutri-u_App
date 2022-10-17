const {Router} = require('express');
const { userInfo } = require('../../controllers/usersControllers/users.controllers');
const auth = require('../../middlewares/auth');
const router = Router()

const routeFavorite = require('./favorites')
const routePost = require('./post')

router.use('/myfavorite', routeFavorite)
router.use('/post', routePost)

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