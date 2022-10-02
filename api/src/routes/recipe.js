const { Router } = require("express")
const router = Router()
const { getApiRecipeByID } = require("../controllers/guest.controllers")

router.get("/:id", async(req, res) => {
    
    let { id } = req.params;
    
    try {

        return res.status(200).json(await getApiRecipeByID(id))

    } catch(error) {

        return res.status(400).json({error: "error getting that specific recipe"})
    }
})

router.post('/', async (req, res) => {

    const { name, vegetarian, vegan, glutenFree, dairyFree, veryPopular, healthScore, image, summary, cuisines, dishTypes, diet } = req.body;
    
    try{
        if(!(name && vegetarian && vegan && glutenFree && dairyFree && veryPopular && summary && diet)) throw new Error ('We dont recive all the necessary info')
        
        const findRecipe = await recipe.findAll({where: {name: name}})
        if(findRecipe.length !== 0) throw new Error ('This recipe already exist')

        const newRecipe = await recipe.create({
           name,
           vegetarian,
           vegan, 
           glutenFree, 
           dairyFree, 
           veryPopular, 
           healthScore: healthScore ? healthScore : 0, 
           image: image ? image : '', 
           summary, 
           cuisines: cuisines ? cuisines : 'no cuisines available', 
           dishTypes: dishTypes ? dishTypes: 'no dish type available'
        })
        console.log(newRecipe)
        const dietType = await dietTypes.findAll({
            where: {name: diet}
        })
        newRecipe.addDiet(dietType)
        
        res.send('Recipe created successfully')

    }catch(e){
        res.send(e.message)
    }

})

module.exports = router;