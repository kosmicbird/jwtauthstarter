const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const router = require('./router');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/FullAuth');

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port);

console.log('Server listening on port', port);