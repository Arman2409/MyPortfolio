"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
};
async function connect() {
    await mongoose_1.default.connect(process.env.MONGODB_URL, options).then((res) => {
        if (res) {
            console.log(`Databe connected to ${process.env.MONGODB_URL}`);
        }
    }).catch((err) => {
        console.log(err);
    });
}
connect();
exports.default = mongoose_1.default;
