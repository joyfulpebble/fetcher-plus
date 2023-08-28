/* eslint-disable no-unused-vars */
type ErrorSetterType = React.Dispatch<React.SetStateAction<string | null>>;
type IsRequiredI = (
	value: unknown,
	errorSetter?: ErrorSetterType,
	message?: string
) => string | null;

export const isRequired: IsRequiredI = (
	value: unknown,
	errorSetter?: ErrorSetterType,
	message?: string
) => {
	message = "This field is required";
	if (!value) {
		!!errorSetter && errorSetter(message);
		return message;
	}
	!!errorSetter && errorSetter(null);
	return null;
};
