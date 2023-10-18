"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const axios_1 = __importDefault(require("axios"));
const data_json_1 = __importDefault(require("../data.json"));
const fetchData = async (actionType, dataType, body) => {
    if (actionType === "sendMessage") {
        if (process.env.REACT_APP_NO_SERVER) {
            return "";
        }
        return axios_1.default.post("/sendMessage", body).then((res) => {
            if (res.data.message) {
                return Promise.resolve(res.data.message);
            }
        });
    }
    else if (actionType === "getData") {
        if (process.env.REACT_APP_NO_SERVER) {
            return Promise.resolve(data_json_1.default[dataType]);
        }
        return axios_1.default.get("/getData:" + dataType)
            .then(({ data }) => {
            return data;
        }).catch(({ message }) => {
            return message;
        });
    }
};
exports.fetchData = fetchData;
