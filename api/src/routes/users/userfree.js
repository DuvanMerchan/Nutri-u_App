const {Router} = require('express')
const router = Router()

const userFreeControllers = require('../../controllers/usersControllers/userfree.controller.js')


router.post('/singin',userFreeControllers.singIn)
router.post('/singup',userFreeControllers.singUp)

module.exports = router;