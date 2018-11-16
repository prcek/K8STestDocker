'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const HOSTNAME = process.env.HOSTNAME;
const APP_NAME = process.evn.APP_NAME;
// App
const app = express();
app.get('/', (req, res) => {

  res.send(''+APP_NAME+'Hello world - '+HOSTNAME+'\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

