const { Router } = require("express")
const router = Router()
const { getApiRecipeByID } = require("../controllers/guest.controllers")

router.get("/recipes/:id", async(req, res) => {
    
    let { id } = req.params;
    
    try {

        return res.status(200).json(await getApiRecipeByID(id))

    } catch(error) {

        return res.status(400).json({error: "error getting that specific recipe"})
    }
})