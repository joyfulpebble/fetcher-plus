import { main_instance } from "./api-config";

export default class Service {
  static async GET(path: string, params?: object): Promise<Object> {
    const response = await main_instance.get(path, {
      params: params,
    });
    
    return response;
  };
}