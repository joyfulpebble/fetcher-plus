import { AxiosError } from "axios";
import { displayError } from "../../../pages/components/status-bar/StatusBar";
import Service from "../API/Service";

export default async function fetcher(url: string, param: any): Promise<any> {
  let response = null;
  
  try {
    response = await Service.getContent(url, param);

    return response;
  } catch (error) {
    displayError(error)

    return null;
  }
}