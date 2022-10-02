const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");

const getAllDiet = async () => {
  try {
    const dietsDB = await Diet.findAll();
    return dietsDB;
  } catch (e) {
    console.log(e);
  }
};

const getDietByID = async (id) => {
  try {
    const dietID = await Diet.findByPk(id);
    return dietID;
  } catch (e) {
    console.log(e);
  }
};

const getDietByName = async (name) => {
  try {
    const dietName = await Diet.findOne({
      where: {
        name: name.toLowerCase(),
      },
    });
    return dietName;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllDiet,
  getDietByID,
  getDietByName,
};
