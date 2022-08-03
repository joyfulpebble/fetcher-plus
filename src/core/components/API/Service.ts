import axios from 'axios'

export default class Service {
  static async getContent(path: string, params?: Object): Promise<Object> {
    let response = null;

    if (!params) {
      response = await axios.get(path);
    } else {
      response = await axios.get(path, params);
    }

    return response.data;
  }
}