const server = require('./src/app.js');
const { conn, Diet } = require('./src/db.js');
const {DB_PORT} = process.env
const dietTypes = require('./src/utils/apispoon')

// import dietTypes from './src/utils/apispoon'

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(DB_PORT, () => {
    console.log(`%s listening at ${DB_PORT}`); // eslint-disable-line no-console
 
    dietTypes.forEach(async d =>{
    
            // const exist = await Diet.findOne({where: {name: d.name}})
            
                await Diet.create({
                    id: d.id,
                    name: d.name,
                    description: d.description
                })
            
            // console.log(exist)
        })

  });
});