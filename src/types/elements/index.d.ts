import React from "react";
import monaco from "monaco-editor/esm/vs/editor/editor.api";
import { DynamicObjectKeysI } from "../simple_models";

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
	secondInfoText: string | number;
	secondRef?: React.RefObject<HTMLInputElement>;
	// eslint-disable-next-line no-unused-vars
	onSubmitFuncton: (values: DynamicObjectKeysI) => void;
	formId: string;
}

export interface SwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
	needParameters: boolean;
	handleIsCheckedParameters: () => void;
	spanText: string | number;
}

export interface ParamsListProps {
	displayedParameters: [string, string | number][];
	setDisplayedParameters: React.Dispatch<React.SetStateAction<[string, string | number][]>>;
	parameters: DynamicObjectKeysI;
	setParameters: React.Dispatch<React.SetStateAction<DynamicObjectKeysI>>;
}

export interface ListPropsI {
	array: Array<string | number | Array<string | number>>;
	// eslint-disable-next-line no-unused-vars
	deleteFunction: (index: number) => void;
}

export type OnlineStatusProviderProps = {
	children: React.ReactNode;
};

export interface NetConnetctionProps {
	isOnline: boolean;
}
