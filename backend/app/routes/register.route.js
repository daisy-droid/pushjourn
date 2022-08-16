const express = require('express')
const app = express()


const bodyparser = require('body-parser');

//require("dotenv").config();
const pool = require("../config/db");
//const { unlinkSync } = require("fs");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



const { register } = require("../controllers/users/register.controller");

app.post('/register', register)

module.exports = app