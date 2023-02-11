export interface DynamicObjectKeys {
  [key: string]: string | number | Date;
}

export interface MainInfoOfRequestFromFields {
  request_name: string;
  request_url: string;
}

export interface InfoOfParamsFromFields {
  parameter_name: string;
  parameter_value: string;
}

export interface RequestErrorsStateI {
  errors: Array<string | null>
}

export interface ErrorBoundaryState {
  error: boolean;
}