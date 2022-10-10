export interface FormWithToFieldsProps {
  firstInitValueName: naumber | string; 
  firstInitValue: string | number;
  firstInfoText: string | number; 
  firstRef?: React.RefObject<HTMLInputElement>; 
  secondInitValueName: naumber | string;
  secondInitValue: string | number;
  secondInfoText: string | number,
  secondRef?: React.RefObject<HTMLInputElement>;
  onSubmitFuncton ;
  formId: string;
}

export interface SwitchDivProps {
  needParameters: boolean;
  handleIsCheckedParameters: () => void;
  spanText: string | number;
}