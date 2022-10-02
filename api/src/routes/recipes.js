const  { Router } = require("express")
const router = Router()
const { getAllInfo } = require("../controllers/recipescontrollers")


router.get("/", async (req, res) => {
    
        let {name} = req.query;
    
    try {

        if(name) {
            return res.status(200).json(await getAllInfo(name))

            } else {

            return res.status(201).json(await getAllInfo())
            }

        } catch(error) {
            return res.status(400).json({error: "error getting the recipes"})
        }

})

module.exports = router;