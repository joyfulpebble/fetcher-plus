export namespace GeneralT {
	export type ObjectKeysT = string | number | symbol;
	export type MainRequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

	export interface DynamicObjectI {
		[key: ObjectKeysT]: any;
	}
}
