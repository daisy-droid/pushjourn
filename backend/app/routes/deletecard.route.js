const express = require('express')
const app = express()

const controller =require('../controllers/users/deletecard.controller')

app.delete('/delete/:id', controller.delete);

module.exports = app
