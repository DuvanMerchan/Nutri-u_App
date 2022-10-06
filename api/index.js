const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {DB_PORT} = process.env
const { loadDbInfo } = require('./src/utils/onStartServerFunc')



// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(DB_PORT, () => {
    console.log(`%s listening at ${DB_PORT}`); // eslint-disable-line no-console
    
    loadDbInfo()
    

  });
});