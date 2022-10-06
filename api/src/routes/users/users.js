const {Router} = require('express');
const { changeToPremium } = require('../../controllers/usersControllers/userfree.controller');
const router = Router()



router.patch('/premium', (req,res) =>{
let user = changeToPremium()
})
//router.post('/login',userFreeControllers.login)

module.exports = router;