import Mongoose from "./database.js";

const Skill = new Mongoose.Schema({
    source: {type: String, required: true},
    percentage: {type: Number, required: true},
});

const Model = Mongoose.model("skills", Skill, "skills");

export default Model;