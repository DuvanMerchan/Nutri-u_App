const { Router } = require("express");
const { listFavorite, createList } = require("../../controllers/usersControllers/favorites.controllers");
const auth = require('../../middlewares/auth');
const router = Router()

router.post('/newlist',auth ,async (req, res) =>{
    let {name , user} = req.body;
    let newList = await createList( user, name)
    res.json(newList)
})

router.get('/lists', auth, async (req, res)=>{
    let {user} = req.body
    let fav = await listFavorite(user)
    res.json([fav])
})

module.exports = router;