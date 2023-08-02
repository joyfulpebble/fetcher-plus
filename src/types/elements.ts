import type { HTMLAttributes, Dispatch } from "react";
export namespace ElementsT {
	export interface BuggyButtonState {
		releaseBugs: boolean;
	}

	type ButtonStylesT = "primary" | "secondary" | "danger";
	export interface ButtonPropsI {
		content: string;
		disabled: boolean;
		buttonStyle: ButtonStylesT;
		// eslint-disable-next-line no-unused-vars
		onClick?: (e: React.MouseEvent) => void;
	}
	export interface RedirectButtonPropsI {
		content: string;
		disabled?: boolean;
		redirectPath: string;
		buttonStyle: ButtonStylesT;
		// eslint-disable-next-line no-unused-vars
		onClick?: (e: React.MouseEvent) => void;
	}
	// !
	export interface InputPropsI {
		ref?: React.LegacyRef<HTMLInputElement> | undefined;
	}

	export interface SwitchProps extends HTMLAttributes<HTMLButtonElement> {
		needParameters: boolean;
		handleIsCheckedParameters: () => void;
		spanText: string | number;
	}
	// !
	export interface ParamsListProps {
		displayedParameters: [string, string | number][];
		setDisplayedParameters: Dispatch<React.SetStateAction<[string, string | number][]>>;
		parameters: object;
		setParameters: React.Dispatch<React.SetStateAction<object>>;
	}
	// !
	export interface ListPropsI {
		array: Array<string | number | Array<string | number>>;
		// eslint-disable-next-line no-unused-vars
		deleteFunction: (index: number) => void;
	}

	export interface TippyListI {
		methodsArr: Array<string>;
		selectedMethod: string;
		selectMethod: React.Dispatch<React.SetStateAction<string>>;
	}

	// !
	export type OnlineStatusProviderProps = {
		children: React.ReactNode;
	};
	// !
	export interface NetConnetctionProps {
		isOnline: boolean;
	}

	export interface ErrorBoundaryStateI {
		error: boolean;
	}
}
