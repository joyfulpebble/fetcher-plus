type ValueT = string | number | boolean | undefined | null;
type MappingT = Record<string, unknown>;
// eslint-disable-next-line no-use-before-define
type ArgumentT = ValueT | MappingT | ArgumentArrayT;
type ArgumentArrayT = Array<ArgumentT>;
type HasOwnWithoutScopeT = (value: PropertyKey) => boolean;

export const useClassNames = () => {
	const customHasOwn: HasOwnWithoutScopeT = {}.hasOwnProperty;

	function classNames(...args: ArgumentT[]): string {
		const final_classes_array: Array<string> = [""];

		for (let i = 0; i < args.length; i++) {
			const argument: ArgumentT = args[i];
			if (!argument) continue;

			if (typeof argument === "string" || typeof argument === "number") {
				final_classes_array.push(argument.toString());
			} else if (Array.isArray(argument)) {
				if (argument.length) {
					const inner = classNames.apply(null, argument);

					if (inner) {
						final_classes_array.push(inner);
					}
				}
			} else if (typeof argument === "object") {
				if (
					argument.toString !== Object.prototype.toString &&
					!argument.toString.toString().includes("[native code]")
				) {
					final_classes_array.push(argument.toString());

					continue;
				}

				for (const key in argument) {
					if (customHasOwn.call(argument, key) && argument[key]) {
						final_classes_array.push(key);
					}
				}
			}
		}

		return final_classes_array.join(" ");
	}

	return classNames;
};
