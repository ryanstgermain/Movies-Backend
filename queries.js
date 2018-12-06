const db = require('./database-connection');
    module.exports = {
        dbQueryGetAll(){
            return db.select().from('movies')
        },
        dbQueryGetById(){
            return db('movies').where('id', id)
        }
}
