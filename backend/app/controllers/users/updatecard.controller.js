const pool = require("../../config/db");

//Delete a user
exports.update = (req, res) => {
    try {
        const {entryid,title, body } = req.body;

        // console.log("entryid: ", entryid, " title: " , title, " body : ", body);

        pool.query('UPDATE notes SET title= $1 , body = $2 WHERE entryid=$3', [title, body,entryid], (error) => {
            if (error) {
                throw error;
            }
            res.status(200).send({messge:`note updated with ID: ${entryid}`});
        });


    } catch (error) {
        res.status(400).send(`not updated:`)
    }
};