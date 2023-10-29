import { useEffect, useState, memo } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestBodyUrlEncodedSlice from "../../../redux/reducers/requestBodyUrlEncodedSlice";

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

import UrlEncodedListItem from "./UrlEncodedListItem";
import UrlEncodedEmptyList from "./UrlEncodedEmptyList";

import "./styles/UrlEncoded.scss";

interface UrlEncodedListProps {
	modalFunc: React.Dispatch<React.SetStateAction<boolean>>;
}

const UrlEncodedList = memo(function UrlEncodedList({ modalFunc }: UrlEncodedListProps) {
	const dispatch = useAppDispatch();
	const { updateUrlEncodedOrder } = requestBodyUrlEncodedSlice.actions;
	const bodyUrlEncoded = useAppSelector((state) => state.requestBodyUrlEncodedReducer);

	const [draggableUrlEncoded, setDraggableUrlEncoded] = useState(bodyUrlEncoded);

	const dragSensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	);

	function handleDragEnd(event: DragCancelEvent) {
		const { active, over } = event;
		if (active?.id !== over?.id) {
			setDraggableUrlEncoded((prev) => {
				const activeIndex = prev.findIndex((item) => item._id === active.id);
				const overIndex = prev.findIndex((item) => item._id === over?.id);
				return arrayMove(prev, activeIndex, overIndex);
			});
		}
	}

	useEffect(() => {
		dispatch(updateUrlEncodedOrder(draggableUrlEncoded));
	}, [draggableUrlEncoded]);

	useEffect(() => {
		setDraggableUrlEncoded(bodyUrlEncoded);
	}, [bodyUrlEncoded]);

	return (
		<div className={bodyUrlEncoded.length === 0 ? "request_body_url_encoded_wrapper_empty" : ""}>
			{bodyUrlEncoded.length ? (
				<DndContext
					sensors={dragSensors}
					onDragEnd={handleDragEnd}
					collisionDetection={closestCenter}
					modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
				>
					<SortableContext
						items={draggableUrlEncoded.map((item) => item._id)}
						strategy={verticalListSortingStrategy}
					>
						{draggableUrlEncoded.map((item) => (
							<UrlEncodedListItem
								key={item._id}
								data={item}
							/>
						))}
					</SortableContext>
				</DndContext>
			) : (
				<UrlEncodedEmptyList modalFunc={modalFunc} />
			)}
		</div>
	);
});

export default UrlEncodedList;
