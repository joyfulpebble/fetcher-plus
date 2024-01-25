export namespace CommonT {
	export type StringKeyVal = { [key: string]: string };
	export type RawBodyImportFileType = { [K in CommonT.BodyRawType]: string };

	export type MainRequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
	export type BodyContentType = "none" | "form-data" | "x-www-form-urlencoded" | "raw";
	export type BodyRawType = "Text" | "JSON" | "XML" | "HTML" | "JavaScript";
	export type AuthType = "none" | "basic-auth" | "bearer-token" | "api-key";
	export type AuthApiKeyType = "header" | "parameter";

	export type ValidationErrorSetterType = React.Dispatch<React.SetStateAction<string | null>>;
}
