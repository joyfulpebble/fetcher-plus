import Service from "../API/Service";

export default async function fetcher(url: string, param: any): Promise<any> {
  let response = null;
  
  try {
    response = await Service.getContent(url, param);

    return response;
  } catch (error: any) {
    if(error.response) {
      return 404;
    } else if(error.request){
      console.log('request err');
      return error
    }
  }
}