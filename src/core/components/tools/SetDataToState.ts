import Service from "../API/Service";

export default async function fetcher(url: string, param: any): Promise<Object> {
  const response = await Service.getContent(url, param);

  return response;
}