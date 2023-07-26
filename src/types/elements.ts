import type { RefObject, HTMLAttributes, Dispatch } from "react";
export namespace ElementsT {
	export interface FormWithToFieldsProps {
		firstInitValueName: number | string;
		firstInitValue: string | number;
		firstInfoText: string | number;
		firstRef?: RefObject<HTMLInputElement>;
		secondInitValueName: number | string;
		secondInitValue: string | number;
		secondInfoText: string | number;
		secondRef?: RefObject<HTMLInputElement>;
		// eslint-disable-next-line no-unused-vars
		onSubmitFuncton: (values: object) => void;
		formId: string;
	}

	export interface SwitchProps extends HTMLAttributes<HTMLButtonElement> {
		needParameters: boolean;
		handleIsCheckedParameters: () => void;
		spanText: string | number;
	}

	export interface ParamsListProps {
		displayedParameters: [string, string | number][];
		setDisplayedParameters: Dispatch<React.SetStateAction<[string, string | number][]>>;
		parameters: object;
		setParameters: React.Dispatch<React.SetStateAction<object>>;
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

	export interface ErrorBoundaryStateI {
		error: boolean;
	}
}
