import { useEffect, useState, memo } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../../../../../../hooks/redux/redux";
import requestBodyFormDataSlice from "../../../../../../../../../../redux/reducers/requestBodyFormDataSlice";

import {
	DndContext,
	DragCancelEvent,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	closestCenter
} from "@dnd-kit/core";
import {
	SortableContext,
	arrayMove,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { restrictToFirstScrollableAncestor, restrictToVerticalAxis } from "@dnd-kit/modifiers";

import { FormDataListItem } from "./FormDataListItem";
import { FormDataEmptyList } from "./FormDataEmptyList";

import "../../styles/FormDataList.scss";

export const FormDataList = memo(function FormDataList() {
	const dispatch = useAppDispatch();
	const { updateFormDataOrder } = requestBodyFormDataSlice.actions;
	const bodyFormData = useAppSelector((state) => state.requestBodyFormDataReducer);

	const [draggableFormData, setDraggableFormData] = useState(bodyFormData);

	const dragSensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	);

	function handleDragEnd(event: DragCancelEvent) {
		const { active, over } = event;
		if (active?.id !== over?.id) {
			setDraggableFormData((prev) => {
				const activeIndex = prev.findIndex((item) => item._id === active.id);
				const overIndex = prev.findIndex((item) => item._id === over?.id);
				return arrayMove(prev, activeIndex, overIndex);
			});
		}
	}

	useEffect(() => {
		dispatch(updateFormDataOrder(draggableFormData));
	}, [draggableFormData]);

	useEffect(() => {
		setDraggableFormData(bodyFormData);
	}, [bodyFormData]);

	return (
		<div className={bodyFormData.length === 0 ? "request_body_form_data_wrapper_empty" : ""}>
			{bodyFormData.length ? (
				<DndContext
					sensors={dragSensors}
					onDragEnd={handleDragEnd}
					collisionDetection={closestCenter}
					modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
				>
					<SortableContext
						items={draggableFormData.map((header) => header._id)}
						strategy={verticalListSortingStrategy}
					>
						{draggableFormData.map((formData) => (
							<FormDataListItem
								key={formData._id}
								formData={formData}
							/>
						))}
					</SortableContext>
				</DndContext>
			) : (
				<FormDataEmptyList openModalFunc={() => {}} />
			)}
		</div>
	);
});
