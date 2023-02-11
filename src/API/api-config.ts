import axios from "axios";
import getResponseTime from "../tools/api-tools/getResponseTime";

export const main_instance = axios.create();    

getResponseTime(main_instance);