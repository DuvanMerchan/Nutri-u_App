const { Router } = require("express");
const { CreateImc, uploadProfile, listProfile  } = require("../../controllers/usersControllers/profiles.controllers")
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

router.post('/uploadimg',auth ,async (req, res) =>{
    try {
        let {userId, image} = req.body;
        let newList = await uploadProfile(userId, image)
        res.json(newList)
        
    } catch (error) {
        console.log('err',error)
        
    }
})

router.get('/profiles/:userId',auth ,async (req, res) =>{
    try {
        let {userId} = req.params;
        
        let newList = await listProfile(userId)
        res.json(newList)
        
    } catch (error) {
        console.log('err',error)
        
    }
})


module.exports = router;