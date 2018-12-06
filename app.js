const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const queries = require('./queries.js');

//const listings = require('./listings.json');

app.use(cors());
app.use(bodyParser.json());

app.get('/listings', (req, res) => {
    queries.dbQueryGetAll().then(res => res.send(response))
});


app.listen(port, listner)
