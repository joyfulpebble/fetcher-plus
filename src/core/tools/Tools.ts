export default class Tools {
  static checkNetConnection(): boolean {
    return navigator.onLine;
  };

  static getAllStorage(storage: Storage): any[] {
    let values: any[] = []
    let keys: string[] = Object.keys(storage)
    let i: number = keys.length;
  
    while (i--) {
      values.push(storage.getItem(keys[i]));
    }
    return values;
  };

  static getCurrentDate(): string {
    const currentDate: Date = new Date();
  
    return currentDate.toLocaleString();
  };

  static async getMethodHandling(url: string, param: any, func: Function): Promise<any> {  
    try {
      const response = await func(url, param);
  
      return response;
    } catch (error: any) {
      return ['err', error];
    }
  }
}