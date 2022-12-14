const { Router } = require("express");
const router = Router();
const Recipe = require("../db");
const { getApiRecipeByID, createRecipe, deleteRecipe, updateRecipe } = require("../controllers/recipecontrollers");

const auth = require('../middlewares/auth')

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

router.post("/", auth,async (req, res) => {
  const {
    name,
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
        summary &&
        diets
      )
    )
      throw new Error("We dont recive all the necessary info");

    createRecipe(
      name,
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


router.delete("/:id",auth, async (req, res) => {
  let { id } = req.params;

  try {
    deleteRecipe(id);
    res.send(`Recipe ${id} deleted successfully`);
  } catch (e) {
    res.send(e.message);
  }
});

router.put("/:id",auth, async (req, res) => {
  let { id } = req.params;

  try {
    updateRecipe(id);
    res.send(`Recipe ${id} updated successfully`);
  } catch (e) {
    res.send(e.message);
  }
});


module.exports = router;