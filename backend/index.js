import express from "express";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

import sendMessage from "./controllers/sendMessage.js";
import getData from "./controllers/getData.js";

dotenv.config();
const app = express();
app.set("trusty proxy",1);
// middlewares 

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use((req, res, next) => {
    console.log(req.path);
    next();
});
app.use(express.static(path.join(path.resolve() + "../frontend/build/")))

fs.readFile(path.join(path.resolve() + "../frontend/src/App.js"), (err,data) => {
    if (err) console.error(err);
    else if (data) console.log(data);
})
// controllers 

app.get('/', (req, res) => res.send('Server running!'));
app.get('/getData:data', getData);
app.post('/sendMessage', sendMessage);


const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}!`))