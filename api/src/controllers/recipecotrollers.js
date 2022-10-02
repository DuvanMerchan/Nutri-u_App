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
      name: recipeApi.title,
      vegetarian: recipeApi.vegetarian,
      vegan: recipeApi.vegan,
      glutenFree: recipeApi.glutenFree,
      dairyFree: recipeApi.dairyFree,
      veryPopular: recipeApi.veryPopular,
      healthScore: recipeApi.healthScore,
      image: recipeApi.image,
      summary: recipeApi.summary,
      cuisines: recipeApi.cuisines?.map((ele) => ele),
      dishTypes: recipeApi.dishTypes?.map((ele) => ele),
      diets: recipeApi.diets?.map((ele) => ele),
      //ingredients: recipeApi.analyzedInstructions[0].steps?.map(ele => ele.ingredients.name): "does not have any ingredient"
    };
    return recipeData;
  }
};

const createRecipe = async (
  name,
  vegetarian,
  vegan,
  glutenFree,
  dairyFree,
  veryPopular,
  healthScore,
  image,
  summary,
  cuisines,
  dishTypes,
  diets
) => {
    try{ 
    const findRecipe = await Recipe.findAll({ where: { name: name } });
  if (findRecipe.length !== 0) throw new Error("This recipe already exist");

  const newRecipe = await Recipe.create({
    name,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    veryPopular,
    healthScore: healthScore ? healthScore : 0,
    image: image ? image : "",
    summary,
    cuisines: cuisines ? cuisines : "no cuisines available",
    dishTypes: dishTypes ? dishTypes : "no dish type available",
  });
  const dietType = await Diet.findAll({
      where: { name: diets },
    });
    console.log("dietType", !!dietType);
    await newRecipe.addDiet(dietType);
    console.log("newRecipe", newRecipe);
}catch(e){
    console.log('lol',e)
}
};

module.exports = {
  getApiRecipeByID,
  createRecipe,
};
