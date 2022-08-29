import Service from "../API/Service";

export default async function getMethodHandling(url: string, param: any): Promise<any> {  
  try {
    let response = await Service.getContent(url, param);

    return response;
  } catch (error: any) {
    return ['err', error]
  }
}