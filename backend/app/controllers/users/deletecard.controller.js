const pool = require("../../config/db");

//Delete a user
module.exports.delete = (req, res) => {
    const id = parseInt(req.params.id);
    try {

        pool.query(` DELETE FROM notes WHERE entryid=$1`, [id], (error) => {
            if (error) {
                res.status(400).json({error: 'error'})
            }
            res.status(200).json(`note delete with ID: ${id}`);
        });


    } catch (error) {

        res.status(400).json(`not deleted:`)
    }
};