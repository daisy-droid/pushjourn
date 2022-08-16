const pool = require("../../config/db");
const express = require('express')
const app = express.Router()


const bodyparser = require('body-parser');

//get notes
exports.getbyid = (req, res) => {
    const userid =parseInt(req.params.entryId)
    try {
       // const { userId, title, body } = req.body;

        pool.query('SELECT * FROM notes WHERE entryid = $1 ORDER BY entryId ASC ',[userid], (error,results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });


    } catch (error) {

        res.status(400).send(`not created:`)
    }
};
