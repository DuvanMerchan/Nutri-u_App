const  { Router } = require("express")
const router = Router()
const { getApiRecipes } = require("../controllers/guest.controllers")
const { getApiNameRecipes } = require("../controllers/guest.controllers")

router.get("/", async (req, res) => {
    
        let {name} = req.query;
    
    try {

        if(name) {
            return res.status(200).json(await getApiNameRecipes(name))

            } else {

            return res.status(201).json(await getApiRecipes())
            }

        } catch(error) {
            return res.status(400).json({error: "error getting the recipes"})
        }

})

module.exports = router;