import axios, { 
  AxiosRequestConfig, 
  AxiosResponse 
} from "axios";

export const API = axios.create();    

interface InterceptorT extends AxiosRequestConfig {
  metadata?: {
    endTime?: number;
    startTime?: number;
    duration?: number
  };
}

interface InterceptorResponseT extends AxiosResponse {
  config: InterceptorT;
  duration?: number;
}

API.interceptors.request.use((config: InterceptorT) => {
    config.metadata = { startTime: +new Date()};

    return config;
  }, 
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use((response: InterceptorResponseT) => {
    response.config.metadata!.endTime = +new Date();
    response.config.metadata!.duration = response.config.metadata!.endTime - response.config.metadata!.startTime!;
    
    return response;
  }, 
  (error) => {
    error.config.metadata.endTime = +new Date();
    error.duration = error.config.metadata.endTime - error.config.metadata.startTime;

    return Promise.reject(error);
  }
);