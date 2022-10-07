const jwt = require("jsonwebtoken");
const authConfig = require("../controllers/config/auth");

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    res.json({ msg: "No authorization" });
  } else {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, authConfig.secret, (err, decoded) =>{
        if(err){
            res.json({msg: "No authorization"})
        }else{
          //console.log(decoded)
            next();
        }
    });
    }};
