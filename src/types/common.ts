export namespace CommonT {
	export type StringsObject = { [key: string]: string };

	export type MainRequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
	export type BodyContentType = "none" | "form-data" | "x-www-form-urlencoded" | "raw";
	export type BodyRawType = "Text" | "JSON" | "XML" | "HTML" | "JavaScript";

	export type ValidationErrorSetterType = React.Dispatch<React.SetStateAction<string | null>>;
}
