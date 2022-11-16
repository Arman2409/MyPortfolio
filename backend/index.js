import express from "express";
import dotenv from "dotenv";

import sendMessage from "./controllers/sendMessage.js";
import getData from "./controllers/getData.js";

dotenv.config();
const app = express();

// middlewares 

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))
app.use((req, res, next) => {
    console.log(req.path);
    next();
});

// controllers 

app.get('/', (req, res) => res.send('Server running!'));
app.get('/getData:data', getData);
app.post('/sendMessage', sendMessage);


const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}!`))