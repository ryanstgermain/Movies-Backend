const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const queries = require('./queries.js');
const knex = require('knex');
const config = require("./knexfile");

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    queries.dbQueryGetAll().then(response => res.send(response))
})

app.get('/:id', function(req, res) {
    queries.dbQueryGetById(req.params.id).then(movies => res.send(movies))
})

app.listen(port, function() {
    console.log(`Listening on ${port}`);
})

module.exports = app

