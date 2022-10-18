const {Recipe} = require('../db')
const axios = require('axios');
const { API_KEY } = process.env;








async function getApi(){
    const RecipesAllDb = await Recipe.findAll()
    if(!RecipesAllDb.length){
    const apiAll = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`) //apiAll.data <= .data .data
    const apiInfo = await apiAll.data.results.map((e)=>{
        return {
            apiId: e.id,
                    name: e.title,
                    healthScore: e.healthScore,
                    image: e.image,
                    banned: false,
                    summary: e.summary,
                    //cuisines: e.cuisines?.map(ele => ele),
                    //dishTypes: e.dishTypes?.map(ele => ele),
                    diets: e.diets?.map(ele => ele),
                    createdInDB: false

        }
        
    })

    await Recipe.bulkCreate(apiInfo);     
} 

  
}

module.exports = { getApi };