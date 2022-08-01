import axios from 'axios'
import { ServiceI } from '../../../types/API/Service.types';

export default class Service /*implements ServiceI*/{
  static async getFile(path: string, params?: Object): Promise<any> {
    let response = null;

    if (!params) {
      response = await axios.get(path);
    } else {
      response = await axios.get(path, params);
    }

  console.log(response);

    return response;
  }
}