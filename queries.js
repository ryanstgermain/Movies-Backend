const db = require('./database-connection');
    module.exports = {
        dbQueryGetAll(){
            return db.select().from(movies)
        }
}
