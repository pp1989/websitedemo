const user = require('../models/usermodel');
require('../database/database');

module.exports = {
    statusChange: async (req, res) => {
        try {
            const userstatus = await user.updateMany({ status: false }, { $set: { status: true } });

            if (userstatus.data != null || userstatus.data == undefined) {

                res.status(200).json({ "data": userstatus, message: "Success" })
            }
            else {
                res.status(400).json({ "Error": error, message: "bad request" })
            }

        } catch (error) {

            res.status(400).json({ "Error": error, message: "bad request" })
        }
    }
}