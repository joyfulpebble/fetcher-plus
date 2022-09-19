import axios from 'axios';

export default class Service {
  static async getContent(path: string, params?: any): Promise<Object> {
    if(typeof params === 'string'){
      params = JSON.parse(params!);  
    }

    let response = await axios.get(path, params);    

    return response;
  };
}