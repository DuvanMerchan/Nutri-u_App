const { Router } = require("express");
const {
  getAllDiet,
  getDietByID,
  getDietByName,
} = require("../controllers/dietcotrollers");
const Diet = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  let { name } = req.query;
  try {
    if (!name) {
      const dietsDB = await getAllDiet();
      res.json(dietsDB);
    } else {
      const dietName = await getDietByName(name);
      res.json(dietName);
    }
  } catch (e) {
    console.log(e);
  }
});
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  const dietID = await getDietByID(id);
  res.json(dietID);
});
module.exports = router;
