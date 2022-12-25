export default class Tools {
  static checkNetConnection(): boolean {
    return navigator.onLine;
  };

  static async getMethodHandling(url: string, param: any, func: Function): Promise<any> {  
    try {
      const response = await func(url, param);
      
      return response;
    } catch (error: any) {
      return ['err', error];
    }
  }
  
  static setRequestDataToStorage(
      fetchCfgName: string | number, 
      creationDate: string, 
      fetchUrl: string, 
      fetchParameters?: object
    ): void {
    const requestHistory = localStorage.getItem('REQUEST_HISTORY');
    const newRequest = {
      name: fetchCfgName, 
      time: creationDate, 
      url: fetchUrl, 
      params: fetchParameters
    };
    
    if(requestHistory) {
      const historyArray = JSON.parse(requestHistory);
      
      localStorage.setItem(
        'REQUEST_HISTORY',
        JSON.stringify([ ...historyArray, newRequest ])
      );
    } else {
      localStorage.setItem(
        'REQUEST_HISTORY', 
        JSON.stringify([ newRequest ])
      );
    }
       
  }
  
  static setDataToStorage(
      needParameters: boolean, 
      fetchCfgName: string | number, 
      creationDate: string, 
      fetchUrl: string, 
      fetchParameters: object
    ): void {
    if(needParameters) {
      this.setRequestDataToStorage(fetchCfgName, creationDate, fetchUrl, fetchParameters);
    } else {
      this.setRequestDataToStorage(fetchCfgName, creationDate, fetchUrl, {});
    };
  }
}