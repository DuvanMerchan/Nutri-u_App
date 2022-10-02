const { Router } = require("express")
const { getAllDiet } = require("../controllers/dietcotrollers")
const Diet = require( '../db' )
const router = Router()
// const dietTypes = require('../utils/apispoon')

router.get('/', async (req, res) => {
    try{
        const dietsDB = await getAllDiet()
       res.json(dietsDB)
           
    }catch(e){
        console.log(e)
    }
})

module.exports = router;