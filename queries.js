const db = require('./database-connection');
    module.exports = {
        dbQueryGetAll(){
            return db.select().from('movies')
        },
        dbQueryGetById(){
            return db('movies').where('id', id)
        },
        dbQueryCreateMovie(newMovie){
            return db('movies').insert(newMovie).returning('*')
        },
        dbQueryUpdateMovie(id, updatedMovieInfo){
            return db('movies').where('id', id).update(updatedMovieInfo).returning('*')
        },
        deleteMovie(id){
            return db('movies')
                .where('id', id)
                .delete()
        }
}
