import Mongoose from "./database.js";

const CV = new Mongoose.Schema({
    link: {type: String, required: true},
});

const Model = Mongoose.model("resume", CV, "resume");

export default Model;