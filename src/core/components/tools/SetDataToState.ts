import Service from "../API/Service";
import FortmatToString from "./FortmatToString";

export default async function fetcher(url: string, param: any): Promise<Object> {
  const response = await Service.getContent(url, param);

  return response;
}