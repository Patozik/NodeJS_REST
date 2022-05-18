const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.text())
app.use(bodyParser.json());

let routes = require('./routes.js');
routes(app);

app.listen(port);

console.log('Server started on port ' + port);