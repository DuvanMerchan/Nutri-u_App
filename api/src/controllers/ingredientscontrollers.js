const axios = require ("axios")
const { API_KEY } = process.env
const { Recipe, Diet } = require("../db")

const getApiIngredientByID = async (req, res) => {
        
    const { ingredientID } = req.params;

    try{
        if(ingredientID){
            let { data } = await axios.get(`https://api.spoonacular.com/food/ingredients/${ingredientID}/information?amount=1&apiKey=${API_KEY}`)
            if(data.hasOwnProperty('id')) res.json(data)
            else{throw new Error(`We can't find a recipe with id: ${ingredientID}`)}
        }else{
            throw new Error(`We need an id to search a recipe`)
        }

    }catch(e){
        res.sen(e.message)
    }

}

module.exports = {
    getApiIngredientByID,
}