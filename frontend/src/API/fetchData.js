import axios from "axios";
import data from "../data.json";
export const fetchData = async (actionType, dataType, body) => {
    if (actionType === "sendMessage") {
        if (process.env.REACT_APP_NO_SERVER) {
            return "";
        }
        return axios.post("/sendMessage", body).then((res) => {
            if (res.data.message) {
                return Promise.resolve(res.data.message);
            }
        });
    }
    else if (actionType === "getData") {
        if (process.env.REACT_APP_NO_SERVER) {
            return Promise.resolve(data[dataType]);
        }
        return axios.get("/getData:" + dataType)
            .then(({ data }) => {
            return data;
        }).catch(({ message }) => {
            return message;
        });
    }
};
