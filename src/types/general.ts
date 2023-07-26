export namespace GeneralT {
	export type ObjectKeysT = string | number | symbol;

	export interface DynamicObjectI {
		[key: ObjectKeysT]: any;
	}
}
