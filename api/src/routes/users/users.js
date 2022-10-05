const {Router} = require('express')
const router = Router()

const userFreeControllers = require('../../controllers/usersControllers/userfree.controller.js')


router.post('/singin',userFreeControllers.singIn)
router.post('/login',userFreeControllers.login)

module.exports = router;