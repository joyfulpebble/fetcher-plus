import { useEffect, useState, memo } from "react";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux/redux";
import requestHeadersSlice from "../../../../redux/reducers/requestHeadersSlice";
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
import { HeadersListItem } from "./RequestHeadersListItem";

export const HeadersList = memo(function HeadersList() {
	const dispatch = useAppDispatch();
	const { updateHeadersOrder } = requestHeadersSlice.actions;
	const requestHeaders = useAppSelector((state) => state.requestHeadersSlice);

	const [draggableHeaders, setDraggableHeaders] = useState(requestHeaders);

	const dragSensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	);

	function handleDragEnd(event: DragCancelEvent) {
		const { active, over } = event;
		if (active?.id !== over?.id) {
			setDraggableHeaders((prev) => {
				const activeIndex = prev.findIndex((item) => item._id === active.id);
				const overIndex = prev.findIndex((item) => item._id === over?.id);
				return arrayMove(prev, activeIndex, overIndex);
			});
		}
	}

	useEffect(() => {
		dispatch(updateHeadersOrder(draggableHeaders));
	}, [draggableHeaders]);

	useEffect(() => {
		setDraggableHeaders(requestHeaders);
	}, [requestHeaders]);

	return (
		<>
			<DndContext
				sensors={dragSensors}
				onDragEnd={handleDragEnd}
				collisionDetection={closestCenter}
				modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
			>
				<SortableContext
					items={draggableHeaders.map((header) => header._id)}
					strategy={verticalListSortingStrategy}
				>
					{draggableHeaders.map((header) => (
						<HeadersListItem
							key={header._id}
							header={header}
						/>
					))}
				</SortableContext>
			</DndContext>
		</>
	);
});
