import type { HTMLAttributes } from "react";

export namespace ElementsT {
	export interface BuggyButtonState {
		releaseBugs: boolean;
	}

	type ButtonStylesT = "primary" | "secondary" | "danger" | "invisible";
	export interface ButtonPropsI extends React.HTMLProps<HTMLButtonElement> {
		content?: string;
		icon?: JSX.Element;
		disabled?: boolean;
		buttonStyle: ButtonStylesT;
		// eslint-disable-next-line no-unused-vars
		onClick?: (e: React.MouseEvent) => void;
	}
	export interface RedirectButtonPropsI extends ButtonPropsI {
		redirectPath: string;
	}

	export interface SwitchProps extends HTMLAttributes<HTMLButtonElement> {
		needParameters: boolean;
		handleIsCheckedParameters: () => void;
		spanText: string | number;
	}
	// !
	export interface ListPropsI {
		array: Array<string | number | Array<string | number>>;
		// eslint-disable-next-line no-unused-vars
		deleteFunction: (index: number) => void;
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
