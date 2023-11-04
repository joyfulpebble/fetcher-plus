import { useState, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux/redux";
import customRequestMethodsListSlice from "../../../../redux/reducers/customRequestMethodsListSlice";
import requestSelectedMethodSlice from "../../../../redux/reducers/requestSelectedMethodSlice";

import { defaultRequestMethods as defaultMethods } from "../../../../tools/constants";

import { isIncluded } from "../../../../tools/validation/isIncluded";
import { isRequired } from "../../../../tools/validation/isRequired";

function useAddingRequestMethodModal() {
	const dispatch = useAppDispatch();
	const { addCustomMethod } = customRequestMethodsListSlice.actions;
	const { updateRequestMethod } = requestSelectedMethodSlice.actions;

	const [inputError, setInputError] = useState<string | null>(null);
	const customMethods = useAppSelector((state) => state.customRequestMethodsListReducer);

	const methodNameRef = useRef<HTMLInputElement>(null);

	const modalSubmitFunc = () => {
		if (isRequired(methodNameRef.current!.value, setInputError)) return false;
		if (
			isIncluded(
				methodNameRef.current!.value.toUpperCase(),
				[customMethods, defaultMethods],
				setInputError
			)
		)
			return false;

		setInputError(null);
		dispatch(addCustomMethod(methodNameRef.current!.value.toUpperCase()!));
		dispatch(updateRequestMethod(methodNameRef.current!.value.toUpperCase()!));

		return true;
	};

	const changeFunction = () => {
		isRequired(methodNameRef.current!.value, setInputError);
		isIncluded(
			methodNameRef.current!.value.toUpperCase(),
			[customMethods, defaultMethods],
			setInputError
		);
	};
	return {
		methodNameRef,
		inputError,
		setInputError,
		modalSubmitFunc,
		changeFunction
	};
}

export default useAddingRequestMethodModal;
