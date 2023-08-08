import Mongoose from "./database.js";

const Language = new Mongoose.Schema({
    link: {type: String, required: true},
    name: {type: String, required: true},
});

const Model = Mongoose.model("links", Language, "links");

export default Model;