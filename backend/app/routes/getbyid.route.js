const express = require('express')
const app = express.Router()



const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const getbyid = require("../controllers/users/getbyid.controller");

app.get("/getbyid/:entryId", getbyid.getbyid);

module.exports=app