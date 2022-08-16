require('dotenv').config()

const express = require('express');
const client = require('./app/config/db');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');


//require("./app/config/dotenv"); //Import your environmental configs




app.use(express.json());
app.use(cors());

client.connect((err) => {
    //connect to database
    if (err) {
        console.log(err)
    }
    else {
        console.log("We have a lift off");
    }
});

const PORT = process.env.PORT || 3000


app.get("/status", (req, res) => {
    response.send('running')
});

const create = require("./app/routes/createcard.route");
const update = require("./app/routes/updatecard.route");
const login = require("./app/routes/login.route");
const register =require("./app/routes/register.route");
const deletes = require("./app/routes/deletecard.route");
const getall = require("./app/routes/getall.route");
const getbyid=require("./app/routes/getbyid.route")


// User endpoint API
app.use("/user", update); 
app.use("/user", create); 
app.use("/user", login); 
app.use("/user", register); 
app.use("/user", deletes);
app.use("/user", getall);
app.use("/user", getbyid)

app.listen(PORT, () => console.log(`server is up at port http://localhost:${PORT}`))