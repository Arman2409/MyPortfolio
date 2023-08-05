import express, { Request, Response} from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import sendMessage from "./controllers/sendMessage.js";
import getData from "./controllers/getData.js";

dotenv.config();
const app = express();
app.set("trusty proxy",1);
// middlewares 

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use((req: Request, res:Response, next:any) => {
    console.log(req.path);
    next();
});
app.use(express.static(path.join(path.resolve("../") + "/frontend/build/")))

// controllers 

app.get('/', (req, res) => res.send('Server running!'));
app.get("/portfolio", (req, res) => {
    res.sendFile(path.join(path.resolve("../") + "/frontend/build/index.html"));
});
app.get("/contacts", (req, res) => {
    res.sendFile(path.join(path.resolve("../") + "/frontend/build/index.html"));
});
app.get('/getData:data', getData);
app.post('/sendMessage', sendMessage);


const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}!`))