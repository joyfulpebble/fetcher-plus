import axios from 'axios'

export default class Service {
  static async getContent(path: string, params?: Object): Promise<Object> {
    let response = await axios.get(path, params);

    return response.data;
  }
}