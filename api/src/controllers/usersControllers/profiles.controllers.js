const { User, Profile } = require("../../db");

const CreateImc = async(userId, peso, altura, imc)=>{
  
    try {
      let user = await User.findByPk(userId);
      let userProfile = await Profile.findOne({
      where: {
        userId: user.dataValues.id,
      }})
      
        if(!userProfile && user){
        let newProfile = await Profile.create({

            userId: user.dataValues.id,
            peso: peso,
            altura:altura,
            imc:imc,

          });
         await user.addProfiles(newProfile);
         return {
            succes:newProfile
          }; 
        }
        if(userProfile && user){

           let newProfile = await Profile.update(
                { peso: peso, altura:altura, imc:imc},
                {
                  where: {
                    userId: user.dataValues.id,
                  },
                })
        
     return {
      succes:newProfile,
     }; 
        }

      
      
    } catch (error) {
        console.log(error)
    }
}



const uploadProfile = async(userId, img)=>{
  
  try {
    let user = await User.findByPk(userId);
    let userProfile = await Profile.findOne({
    where: {
      userId: user.dataValues.id,
    }})
    
      if(!userProfile && user){
      let newProfile = await Profile.create({

          userId: user.dataValues.id,
          imgperfil:img

        });
       await user.addProfiles(newProfile);
       return {
          succes:"ProfileNew"
        }; 
      }
      if(userProfile && user){

         let newProfile = await Profile.update(
              { imgperfil: img},
              {
                where: {
                  userId: user.dataValues.id,
                },
              })
      
   return {
    succes:"newProfile",
   }; 
      }

    
    
  } catch (error) {
      console.log(error)
  }
}


const listProfile = async (userId) => {
  try {
    let pro = await Profile.findAll({
      where: {
        userId:userId
      },
    });
    return pro;
  } catch (error) {
    console.log( error);
  }
};

module.exports = {
    CreateImc,
    uploadProfile,
    listProfile
  };