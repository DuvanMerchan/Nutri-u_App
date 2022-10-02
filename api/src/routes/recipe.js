const { Router } = require("express");
const router = Router();
const Recipe = require("../db");
const { getApiRecipeByID } = require("../controllers/recipecontrollers");
const { createRecipe } = require("../controllers/recipecontrollers");

router.get("/:id", async (req, res) => {
  let { id } = req.params;

  try {

    return res.status(200).json(await getApiRecipeByID(id));
  } catch (error) {
    return res
      .status(400)
      .json({ error: "error getting that specific recipe" });
  }
});

router.post("/", async (req, res) => {
  const {
    name,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    veryPopular,
    healthScore,
    image,
    summary,
    // cuisines,
    // dishTypes,
    diets,
  } = req.body;

  try {
    if (
      !(
        name &&
        vegetarian &&
        vegan &&
        glutenFree &&
        dairyFree &&
        veryPopular &&
        summary &&
        diets
      )
    )
      throw new Error("We dont recive all the necessary info");

    createRecipe(
      name,
      vegetarian,
      vegan,
      glutenFree,
      dairyFree,
      veryPopular,
      healthScore,
      image,
      summary,
      // cuisines,
      // dishTypes,
      diets
    );

    res.send(`Recipe ${name} created successfully`);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = router;