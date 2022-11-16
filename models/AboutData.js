import Mongoose from "./database.js";

const About = new Mongoose.Schema({
    data: {type: String, required: true},
    link: {type: String, required: true},
});

const Model = Mongoose.model("about", About, "about");

export default Model;