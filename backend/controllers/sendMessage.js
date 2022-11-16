import Message from "../../models/Message.js";

export default (req, res) => {
   const options = req.body;
   console.log(req.body);
   Message.find({email: options.email}, (err, response) => {
      if (err) console.log({error: err});
      if (response) {
         if (response.length > 0) {
            res.json({message: "Already have a message to review"}).end()
            return;
         }
         Message.create(options, (err,resp) => {
            if (err) {
               res.json({message: "Error occured"}).end();
               return;
            }
            if (resp) {
               res.json({message: "Message sent"}).end();
               return;
            }
         })
      };
   });
};