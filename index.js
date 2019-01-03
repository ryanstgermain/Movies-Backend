const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const queries = require('./queries.js');
const knex = require('knex');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    queries.dbQueryGetAll().then(response => res.send(response))
})

app.get('/:id', (req, res) => {
    queries.dbQueryGetById(req.params.id).then(movies => res.send(movies))
})

app.post('/', (req, res) => {
    queries.dbQueryCreateMovie(req.body).then(movies => res.send(movies))
})

app.delete('/:id', (req, res) => {
    queries.deleteMovie(req.params.id).then(res.sendStatus(204))
})

app.put('/:id', (req, res) => {
    queries.dbQueryUpdateMovie(req.params.id, req.body).then(updatedMovieInfo => res.json(updatedMovieInfo[0]))
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, function() {
    console.log(`Listening on ${port}`);
})

module.exports = app

