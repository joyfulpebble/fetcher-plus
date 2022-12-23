/* 
  functional types 
*/

export interface DynamicObjectKeys {
  [key: string]: string | number;
}

/* 
  unique types
*/

export interface RequestMainData {
  request_name: string;
  request_url: string;
}

export interface RequestParametersData {
  parameter_name: string;
  parameter_value: string;
}