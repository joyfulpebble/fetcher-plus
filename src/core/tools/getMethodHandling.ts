import Service from "../API/Service";

export default async function getMethodHandling(url: string, param: any, func: Function): Promise<any> {  
  try {
    const response = await func(url, param);

    return response;
  } catch (error: any) {
    return ['err', error];
  }
}