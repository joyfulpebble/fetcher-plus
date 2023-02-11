import { API } from './API';

export default class Service {
  static async GET(path: string, params?: object): Promise<Object> {
    let response = await API.get(path, params)
    
    return response;
  };
}