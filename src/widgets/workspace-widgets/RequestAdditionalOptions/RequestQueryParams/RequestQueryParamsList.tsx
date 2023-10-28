import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux/redux";
import requestQueryParamsSlice from "../../../../redux/reducers/requestQueryParamsSlice";
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
import RequestParamsListItem from "./RequestQueryParamsListItem";

const RequestParamsList = () => {
	const dispatch = useAppDispatch();
	const { updateParamsOrder } = requestQueryParamsSlice.actions;
	const requestQueryParams = useAppSelector((state) => state.requestQueryParameters);

	const [draggableParams, setDraggableParams] = useState(requestQueryParams);

	const dragSensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	);

	function handleDragEnd(event: DragCancelEvent) {
		const { active, over } = event;
		if (active?.id !== over?.id) {
			setDraggableParams((prev) => {
				const activeIndex = prev.findIndex((item) => item._id === active.id);
				const overIndex = prev.findIndex((item) => item._id === over?.id);
				return arrayMove(prev, activeIndex, overIndex);
			});
		}
	}

	useEffect(() => {
		dispatch(updateParamsOrder(draggableParams));
	}, [draggableParams]);

	useEffect(() => {
		setDraggableParams(requestQueryParams);
	}, [requestQueryParams]);

	return (
		<>
			<DndContext
				sensors={dragSensors}
				onDragEnd={handleDragEnd}
				collisionDetection={closestCenter}
				modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
			>
				<SortableContext
					items={draggableParams.map((param) => param._id)}
					strategy={verticalListSortingStrategy}
				>
					{draggableParams.map((parameter) => (
						<RequestParamsListItem
							key={parameter._id}
							parameter={parameter}
						/>
					))}
				</SortableContext>
			</DndContext>
		</>
	);
};

export default RequestParamsList;
