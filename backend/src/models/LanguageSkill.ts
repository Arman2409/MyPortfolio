import Mongoose from "./database.js";

const Language = new Mongoose.Schema({
    language: {type: String, required: true},
    level: {type: String, required: true},
});

const Model = Mongoose.model("languageSkills", Language, "languageSkills");

export default Model;