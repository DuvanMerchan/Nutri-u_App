const { Router } = require("express");
const profiles = require('./profiles')
const { User } = require("../../db");
const usersRoutes = require("./users");
const adminRoutes = require("./admin");
const {
  userLogin,
  userSingIn,
  confirmAccount,
  userLogOut,
  forgotPassword,
  newPassword,
} = require("../../controllers/usersControllers/users.controllers");
const {
  changeToPremium,
} = require("../../controllers/usersControllers/userfree.controller");


// Importar todos los routers;

const router = Router();

router.use("/users", usersRoutes);
router.use("/admin", adminRoutes);
router.post("/singin", userSingIn);
router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userLogin(email, password);
  res.json({
    user,
  });
});
router.post("/logout", async (req, res) => {
  let { user, token } = req.body;
  let loggedUser = await userLogOut(user, token);
  res.json({
    loggedUser,
  });
});
router.get("/confirm/:token", confirmAccount);


router.post('/premium', async (req,res) =>{
    let {userEmail, userName, paymentMethod} = req.body
    let respuesta = await changeToPremium(userEmail, userName, paymentMethod)
    // console.log('estoo', JSON.stringify(respuesta))
    res.json({
        respuesta
    })
})



router.post("/forgot-password", forgotPassword)
router.post("/new-password/:token", newPassword)
router.use("/profiles", profiles);


module.exports = router;
