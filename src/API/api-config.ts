import axios from "axios";
import getResponseTime from "../tools/getResponseTime";

export const main_instance = axios.create();    

getResponseTime(main_instance);