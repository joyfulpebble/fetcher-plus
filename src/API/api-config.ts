/* eslint-disable no-duplicate-imports */
import axios from "axios";
import getResponseTime from "../tools/api-tools/getResponseTime";

import type { AxiosInstance } from "axios";

export const main_instance: AxiosInstance = axios.create();

getResponseTime(main_instance);
