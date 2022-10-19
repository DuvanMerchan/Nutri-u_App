const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");

const getApiRecipeByID = async (id) => {
  if (id.length > 15) {
    try {
      const recipeDb = await Recipe.findByPk(id, { include: Diet });

      return recipeDb.dataValues;
    } catch (error) {
      throw new Error("That recipe does not exist");
    }
  } else {
    const url = `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${API_KEY}&addRecipeInformation=true&number=100`;
    const recipeApi = await axios.get(url);
    const recipeData = {
      id:recipeApi.data.id,
      apiId:recipeApi.data.id,
      name: recipeApi.data.title,
      healthScore: recipeApi.data.healthScore,
      image: recipeApi.data.image,
      summary: recipeApi.data.summary,
      // cuisines: recipeApi.data.cuisines?.map((ele) => ele),
      // dishTypes: recipeApi.data.dishTypes?.map((ele) => ele),
      diets: recipeApi.data.diets?.map((ele) => ele),
      //ingredients: recipeApi.analyzedInstructions[0].steps?.map(ele => ele.ingredients.name): "does not have any ingredient"
    };
    return recipeData;
  }
};

const createRecipe = async (
  name,
  healthScore,
  image,
  summary,
  // cuisines,
  // dishTypes,
  diets
) => {
    try{ 
    const findRecipe = await Recipe.findAll({ where: { name: name } });
  if (findRecipe.length !== 0) throw new Error("This recipe already exist");

  const newRecipe = await Recipe.create({
    name,
    healthScore: healthScore ? healthScore : 0,
    image: image ? image : "",
    summary,
    // cuisines: cuisines ? cuisines : "no cuisines available",
    // dishTypes: dishTypes ? dishTypes : "no dish type available",
  });

  const dietType = await Diet.findAll({
      where: { name: diets },
    });
    await newRecipe.addDiet(dietType);
}catch(e){
    console.log(e)
}
};

const deleteRecipe = async (id) => {
  
  try{
    const findRecipe = await Recipe.findByPk({where: {id: id}});
    if(findRecipe.length !== 0) throw new Error('This recipe does not exist')
    await findRecipe.destroy()
  }catch(e){
    console.log(e.message)
  }
}

const updateRecipe = async (id) => {
  try {
    const findRecipe = await Recipe.findByPk({ where: { id: id } });
    if (findRecipe.length !== 0) throw new Error("This recipe does not exist");
    await findRecipe.update();
  } catch (e) {
    console.log(e.message);
  }
}




module.exports = {
  getApiRecipeByID,
  createRecipe,
  deleteRecipe,
  updateRecipe,
};
