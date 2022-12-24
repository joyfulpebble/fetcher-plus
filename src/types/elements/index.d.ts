import React, { ReactNode } from "react";
import monaco from 'monaco-editor/esm/vs/editor/editor.api';

export interface DefaultEditorProps {
  EditorWidth: string;
  EditorHeight: string;
  EditorInitValue: string;
  EditorConfig?: monaco.editor.IStandaloneEditorConstructionOptions | undefined;
  ContentToSaveFunc: React.Dispatch<React.SetStateAction<string>>;
}

export interface SetGetContentToEditorProps {
  ContentTosaveFunc: React.Dispatch<React.SetStateAction<string>>;
  SetErrorFunction: React.Dispatch<React.SetStateAction<any[] | undefined>>
  HandlingRequestFunc: (url: string, param: any, func: Function) => Promise<Object>;
  RequestFunction: (path: string, params?: any) => Promise<Object>;
}

export interface FormWithToFieldsProps {
  firstInitValueName: number | string; 
  firstInitValue: string | number;
  firstInfoText: string | number; 
  firstRef?: React.RefObject<HTMLInputElement>; 
  secondInitValueName: number | string;
  secondInitValue: string | number;
  secondInfoText: string | number,
  secondRef?: React.RefObject<HTMLInputElement>;
  onSubmitFuncton ;
  formId: string;
}

export interface SwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
  needParameters: boolean;
  handleIsCheckedParameters: () => void;
  spanText: string | number;
}