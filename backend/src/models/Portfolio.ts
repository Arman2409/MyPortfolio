import Mongoose from "./database.js";

const Portfolio = new Mongoose.Schema({
    link: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    id: {type: Number, required: true},
    img: {type: String, required: true},
});

const Model = Mongoose.model("portfolio", Portfolio, "portfolio");

export default Model;