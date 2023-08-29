import type { CommonT } from "../../types/common";

type IncludeType = (
	value: unknown,
	verifiableArrays: Array<unknown[]>,
	errorSetter?: CommonT.ValidationErrorSetterType
) => string | null;

export const isIncluded: IncludeType = (value, verifiableArrays, errorSetter?) => {
	const message = "This method has already been added.";
	const result = verifiableArrays.map((array: unknown[]) =>
		array.find((validName: unknown) => validName === value)
	);

	if (result.includes(value)) {
		!!errorSetter && errorSetter(message);
		return message;
	}
	return null;
};
