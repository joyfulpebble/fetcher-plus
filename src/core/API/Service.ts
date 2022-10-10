import axios from 'axios';

export default class Service {
  static async getContent(path: string, params?: any): Promise<Object> {
    let response = await axios.get(path, {params: params});    

    return response;
  };
}