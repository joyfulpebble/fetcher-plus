import axios, { AxiosRequestHeaders } from 'axios';

export default class Service {
  static async GET(path: string, params?: object): Promise<Object> {
    let response = await axios.get(path, {params: params});    

    return response;
  };

  static async POST(path: string, data: any, hearders: AxiosRequestHeaders | undefined): Promise<void> {
    let request = axios.post(path, data, {headers: hearders});
    
    return;
  }
}