const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require("./config");

//load routing
const locationRoutes = require("./routers/location");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure Header HTTP
// ....


// Router Basic
app.use(`/${API_VERSION}`, locationRoutes);

module.exports = app;
