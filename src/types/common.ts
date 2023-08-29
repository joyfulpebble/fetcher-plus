export namespace CommonT {
	export type StringsObject = { [key: string]: string };

	export type MainRequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

	export type ValidationErrorSetterType = React.Dispatch<React.SetStateAction<string | null>>;
}
