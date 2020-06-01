const bcrypt = require('bcrypt');
require('dotenv').config();
const saltRounds = 19;

module.exports = {

        contact: async (req, res) => {
            try {
            const all = req.body;
            console.log("Hello REGISTRATION", all);

            var salt = await bcrypt.genSaltSync(saltRounds);
            var encryptName = await bcrypt.hashSync(all.name, salt);
            var encryptEmail = await bcrypt.hashSync(all.email, salt);
            var encryptSubject = await bcrypt.hashSync(all.subject, salt);
            var encryptMessage = await bcrypt.hashSync(all.message, salt);


            console.log("ENCRYPT", encryptName, +" " + encryptEmail + " " + encryptSubject + " " + encryptMessage);

            res.status(200).json({ Name: encryptName, Email: encryptEmail, Subject: encryptSubject, Message: encryptMessage })
            // res.send({resp:"Hello"})
        
        }catch(error){
            res.status(400).send({error:error,ErrorMessage:"bad request"})
        }

    } 
}


