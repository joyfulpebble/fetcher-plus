import axios from 'axios';

export default class Service {
  static async getContent(path: string, params?: any): Promise<Object> {
    if(typeof params === 'string'){
      params = JSON.parse(params!);  
    }

    let response = await axios.get(path, params);    

    return response.data;
  };

  static async getHeader(path: string, params?: any): Promise<Object> {
    if(typeof params === 'string'){
      params = JSON.parse(params!);  
    }

    let response = await axios.get(path, params);    

    return response.headers;
  };

  static async getConfig(path: string, params?: any): Promise<Object> {
    if(typeof params === 'string'){
      params = JSON.parse(params!);  
    }

    let response = await axios.get(path, params);    

    return response.config;
  };
  
  static async getStatus(path: string, params?: any): Promise<Object> {
    if(typeof params === 'string'){
      params = JSON.parse(params!);  
    }

    let response = await axios.get(path, params);    

    return [response.status, response.statusText];
  };
}