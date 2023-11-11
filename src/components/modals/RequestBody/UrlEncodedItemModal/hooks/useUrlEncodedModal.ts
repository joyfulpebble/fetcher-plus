import { useRef } from "react";
import { useAppDispatch } from "../../../../../hooks/redux/redux";
import { useForm } from "../../../../../hooks/useForm";

import requestBodyUrlEncodedSlice from "../../../../../redux/reducers/requestBodyUrlEncodedSlice";

import { v1 as uuidv1 } from "uuid";

type NewUrlEncodedItemT = {
	key: string;
	value: string;
};

function useUrlEncodedModal() {
	const dispatch = useAppDispatch();
	const { addUrlEncodedItem } = requestBodyUrlEncodedSlice.actions;

	const keyInputRef = useRef<HTMLInputElement>(null);
	const valueInputRef = useRef<HTMLInputElement>(null);
	// const { values, saveFuildValue } = useForm<NewUrlEncodedItemT>({
	// 	initialValues: { key: "", value: "" }
	// });

	const modalSubmitFunc = ({ key, value }: NewUrlEncodedItemT) => {
		dispatch(
			addUrlEncodedItem({
				_id: uuidv1(),
				isUsed: true,
				key: key,
				value: value
			})
		);

		// saveFuildValue("value", "");
		// saveFuildValue("key", "");

		return true;
	};
	return {
		// values,
		keyInputRef,
		valueInputRef,
		// saveFuildValue,
		modalSubmitFunc
	};
}

export default useUrlEncodedModal;
