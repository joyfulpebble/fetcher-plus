/* eslint-disable no-unused-vars */
import type { CommonT } from "../../types/common";

type IsRequiredI = (
	value: unknown,
	errorSetter?: CommonT.ValidationErrorSetterType,
	message?: string
) => string | null;

export const isRequired: IsRequiredI = (value, errorSetter?, message?) => {
	message = "This field is required";
	if (!value) {
		!!errorSetter && errorSetter(message);
		return message;
	}
	!!errorSetter && errorSetter(null);
	return null;
};
