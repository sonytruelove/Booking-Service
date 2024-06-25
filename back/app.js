require("dotenv").config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
const cors = require("cors");

var app = express();

app.use(
    cors({
      credentials: true,
      origin: process.env.CLIENT_URL,
    })
  );

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.json({ message: "Hello world!" });
});

app.get("/api/test", (req, res) => {
    res.json({ message: "Hello world!" });
});

module.exports = app;
