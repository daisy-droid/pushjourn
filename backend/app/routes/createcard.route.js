const express = require('express')
const app = express()


const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const createcard = require("../controllers/users/createcard.controller");

app.post('/createcard/:id', createcard.create)

module.exports=app