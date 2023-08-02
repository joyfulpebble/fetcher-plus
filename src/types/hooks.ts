export namespace HooksT {
	export namespace UseClassnamesT {
		type ValueT = string | number | boolean | undefined | null;
		type MappingT = Record<string, unknown>;
		// eslint-disable-next-line no-use-before-define
		export type ArgumentT = ValueT | MappingT | ArgumentArrayT;
		type ArgumentArrayT = Array<ArgumentT>;
		export type HasOwnWithoutScopeT = (value: PropertyKey) => boolean;
	}
}
