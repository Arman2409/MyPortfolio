import axios from "axios"

import data from "../data.json";

type ObjectKey = keyof typeof data;
export const fetchData = async (actionType: string, dataType: ObjectKey, body?:any) => {
    if(actionType === "sendMessage") {
        if (process.env.REACT_APP_NO_SERVER) {
            return "";
        }
        return axios.post("/sendMessage", body).then((res) => {
            if (res.data.message) {
              return Promise.resolve(res.data.message)
            }
        })
    } else if (actionType === "getData") { 
        if (process.env.REACT_APP_NO_SERVER) {
            return Promise.resolve(data[dataType]);
        }
        return  axios.get("/getData:" + dataType)
        .then(({data}:{data:any}) => {
            return data;
        }
        ).catch(({message}:Error) => {
            return message;
        })
    }
}