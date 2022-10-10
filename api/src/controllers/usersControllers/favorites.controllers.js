const { User, Favorites, Recipe } = require("../../db");

const createList = async (user, name) => {
  let userF = await User.findByPk(user.id);
  userF = userF.dataValues
  let list = await Favorites.findOne({
    where: { name: name },
  });
  //console.log('userF',userF)
  try {
    if (list) {
        throw new Error("A list with thie name already exist");
      } else {
        let newList = await Favorites.create({
          name: name,
          userId: userF.id
        });
        console.log('newList',newList)
        let userList = await userF.addFavorites(newList);
        return {
          user: userList,
          list: newList,
        };
      }
  } catch (error) {
    console.log("lol", error);
  }
};
const listFavorite = async (user) => {
  try {
    let user = await User.findByPk(user.id);
    let fav = await user.findAll({
      include: [
        {
          model: Favorites,
        },
      ],
    });
    return fav;
  } catch (error) {
    console.log("lol", error);
  }
};

const listById = async () => {};

const listByName = async () => {};

const deleteList = async () => {};

const updateList = async () => {};

module.exports = {
  listFavorite,
  createList,
  listById,
  listByName,
  deleteList,
  updateList,
};
