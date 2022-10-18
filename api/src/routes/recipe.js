const { Router } = require("express");
const router = Router();
const Recipe = require("../db");
const { getApiRecipeByID, createRecipe, deleteRecipe, updateRecipe, recipeBanned } = require("../controllers/recipecontrollers");

const auth = require('../middlewares/auth');
const { countRanking, getRecipePost } = require("../controllers/usersControllers/PostRanking.controllers");

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
router.get('/reciperank/:recipeId', async (req,res)=>{
  let {recipeId} = req.params
  let rank = await countRanking(recipeId)
  res.json(Math.round(rank))
})
router.get('/post/:recipeId', async (req,res)=>{
  let {recipeId} = req.params
  let post = await getRecipePost(recipeId)
  res.json(post)
})
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

router.put("/banned/:id",auth, async (req, res) => {
  let { id } = req.params;
  let {banned} = req.body
  try {
    let recipe = await recipeBanned(id,banned)
    res.send(`Recipe ${id} banned successfully`);
  } catch (e) {
    res.send(e.message);
  }
});



module.exports = router;