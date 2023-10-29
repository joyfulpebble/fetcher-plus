import { useAppDispatch } from "../../../../hooks/redux/redux";
import requestBodyUrlEncodedSlice, {
	type BodyUrlEncodedItem
} from "../../../../redux/reducers/requestBodyUrlEncodedSlice";

export const useUrlEncodedListItem = (item: BodyUrlEncodedItem) => {
	const dispatch = useAppDispatch();
	const {
		updateUrlEncodedState,
		updateUrlEncodedKey,
		updateUrlEncodedValue,
		deleteUrlEncodedItem
	} = requestBodyUrlEncodedSlice.actions;

	const updateUrlEncodedItemState = () => {
		dispatch(updateUrlEncodedState(item._id));
	};

	const updateUrlEncodedItemKeyFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			updateUrlEncodedKey({
				id: item._id,
				key: event.target.value
			})
		);
	};

	const updateUrlEncodedItemValueFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			updateUrlEncodedValue({
				id: item._id,
				value: event.target.value
			})
		);
	};

	const deletUrlEncodedItemFunc = () => {
		dispatch(deleteUrlEncodedItem(item._id));
	};

	return {
		updateUrlEncodedItemState,
		updateUrlEncodedItemKeyFunc,
		updateUrlEncodedItemValueFunc,
		deletUrlEncodedItemFunc
	};
};
