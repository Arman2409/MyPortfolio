import Mongoose from "./database.js";

const Message = new Mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
});

const Model = Mongoose.model("messages", Message, "messages");

export default Model;