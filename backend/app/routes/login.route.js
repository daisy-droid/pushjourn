const express = require('express')
const app = express()


const bodyparser = require('body-parser');

//require("dotenv").config();
const pool = require("../config/db");
//const { unlinkSync } = require("fs");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



const { login } = require("../controllers/users/login.controller");

app.post('/login',login)

module.exports = app