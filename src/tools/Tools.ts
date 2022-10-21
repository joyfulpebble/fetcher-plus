export default class Tools {
  static checkNetConnection(): boolean {
    return navigator.onLine;
  };

  static getAllStorage(storage: Storage): any[] {
    let values: any[] = []
    let keys: string[] = Object.keys(storage)
    let index: number = keys.length;
  
    while (index--) {
      values.push(storage.getItem(keys[index]));
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
  
  static setDataToSessionStorage(creationDate: string, fetchUrl: string, fetchParameters?: object): void {
    sessionStorage.setItem(
      creationDate, 
      JSON.stringify({
        url: fetchUrl, 
        params: fetchParameters
      })
    );
  }

  static setDataToLocalStorage(fetchCfgName: string | number, creationDate: string, fetchUrl: string, fetchParameters?: object): void {
    localStorage.setItem(
      creationDate, 
      JSON.stringify({
        name: fetchCfgName, 
        time: creationDate, 
        url: fetchUrl, 
        params: fetchParameters
      })  
    );
  }
  
  static setDataToStorage(storageType: string, needParameters: boolean, fetchCfgName: string | number, creationDate: string, fetchUrl: string, fetchParameters: object): void {
    switch (storageType) {
      case 'all':
        if(needParameters) {
          this.setDataToSessionStorage(creationDate, fetchUrl, fetchParameters);
          this.setDataToLocalStorage(fetchCfgName, creationDate, fetchUrl, fetchParameters);
        } else {
          this.setDataToLocalStorage(fetchCfgName, creationDate, fetchUrl, {});
          this.setDataToSessionStorage(creationDate, fetchUrl, {});
        };
      break;
      
      case 'local':
        if(needParameters) {
          this.setDataToLocalStorage(fetchCfgName, creationDate, fetchUrl, fetchParameters);
        } else {
          this.setDataToLocalStorage(fetchCfgName, creationDate, fetchUrl, {});
        };
      break;

      case 'session':
        if(needParameters) {
          this.setDataToSessionStorage(creationDate, fetchUrl, fetchParameters);
        } else {
          this.setDataToSessionStorage(creationDate, fetchUrl, {});
        };
      break;

      default:
        break;
    }
  }
}