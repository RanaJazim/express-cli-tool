const express = require("express");
require("express-async-errors");
const bodyParser = require("body-parser");

// local imports
const catchUnhandleExceptions = require("./src/middlewares/exception-handling");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this should be always the last middleware. otherwise it will not work properly
// best practise don't modify this middleware
app.use(catchUnhandleExceptions);

module.exports = app;
