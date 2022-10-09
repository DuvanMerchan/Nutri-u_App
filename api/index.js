const server = require('./src/app.js');
const { conn, Diet } = require('./src/db.js');
const {DB_PORT} = process.env
const dietTypes = require('./src/utils/apispoon')

// import dietTypes from './src/utils/apispoon'

// Syncing all the models at once.
conn.sync({ alter: false }).then(() => {
  server.listen(DB_PORT, () => {
    console.log(`%s listening at ${DB_PORT}`); // eslint-disable-line no-console
 
    dietTypes.forEach(async d =>{           
                await Diet.findOrCreate({
                  where: {
                    id: d.id,
                    name: d.name.toLowerCase(),
                    description: d.description
                  },
                  default:{
                    id: d.id,
                    name: d.name.toLowerCase(),
                    description: d.description
                  }
                })
        })

  });
});