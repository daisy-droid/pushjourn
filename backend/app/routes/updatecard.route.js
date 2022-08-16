
const express = require('express')
const app = express()


const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const updatecard = require("../controllers/users/updatecard.controller");

app.put('/updatecard/', updatecard.update)

module.exports=app