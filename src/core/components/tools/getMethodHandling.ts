import Service from "../API/Service";

export default async function getMethodHandling(url: string, param: any): Promise<any> {
  let response = null;
  
  try {
    response = await Service.getContent(url, param);

    return response;
  } catch (error: any) {   
    return error.request.status;
  }
}