const { Router } = require("express");
const { CreateImc  } = require("../../controllers/usersControllers/profiles.controllers")
const auth = require('../../middlewares/auth');
const router = Router()

router.post('/calculator',auth ,async (req, res) =>{
    try {
        let {userId, peso, altura,imcMessage} = req.body;
        console.log("hola soy peso",peso)
        let newList = await CreateImc(userId, peso,altura,imcMessage)
        res.json(newList)
        
    } catch (error) {
        console.log('err',error)
        
    }
})


module.exports = router;