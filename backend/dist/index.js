"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const sendMessage_js_1 = __importDefault(require("./controllers/sendMessage.js"));
const getData_js_1 = __importDefault(require("./controllers/getData.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.set("trusty proxy", 1);
// middlewares 
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use((req, res, next) => {
    console.log(req.path);
    next();
});
app.use(express_1.default.static(path_1.default.join(path_1.default.resolve("../") + "/frontend/build/")));
// controllers 
app.get('/', (req, res) => res.send('Server running!'));
app.get("/portfolio", (req, res) => {
    res.sendFile(path_1.default.join(path_1.default.resolve("../") + "/frontend/build/index.html"));
});
app.get("/contacts", (req, res) => {
    res.sendFile(path_1.default.join(path_1.default.resolve("../") + "/frontend/build/index.html"));
});
app.get('/getData:data', getData_js_1.default);
app.post('/sendMessage', sendMessage_js_1.default);
const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
