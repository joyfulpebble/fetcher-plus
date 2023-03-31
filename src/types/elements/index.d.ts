import React, { ReactNode } from "react";
import monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { AxiosResponse } from "axios";

export interface DefaultEditorProps {
  EditorWidth: string;
  EditorHeight: string;
  EditorInitValue: any;
  EditorConfig?: monaco.editor.IStandaloneEditorConstructionOptions | undefined;
  ContentToSaveFunc: React.Dispatch<React.SetStateAction<any>>;
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
  onSubmitFuncton: (values: typeof values) => DynamicObjectKeys;
  formId: string;
}

export interface SwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
  needParameters: boolean;
  handleIsCheckedParameters: () => void;
  spanText: string | number;
}

export interface ParamsListProps {
  displayedParameters:  ObjectEntries<DynamicObjectKeys>;
  setDisplayedParameters:  React.Dispatch<React.SetStateAction<ObjectEntries<DynamicObjectKeys>>>;
  parameters: DynamicObjectKeys;
  setParameters: React.Dispatch<React.SetStateAction<DynamicObjectKeys>>;
}

export interface ListPropsI {
  array: Array<string | number | Array<string | number>>
  deleteFunction: (index: number) => void;
}

export type OnlineStatusProviderProps = {
  children: React.ReactNode;
};

export interface NetConnetctionProps {
  isOnline: boolean;
}