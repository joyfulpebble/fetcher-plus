import axios from 'axios';

export default class Service {
  static async GET(path: string, params?: any): Promise<Object> {
    let response = await axios.get(path, {params: params});    

    return response;
  };

  static async POST(path: string, data: any, hearders: object): Promise<void> {
    let request = axios({
      method: 'post',
      url: path,
      data: data,
      headers: {
        ...hearders
      }
    });

    return
  }
}