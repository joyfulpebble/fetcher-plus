import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../../../../hooks/redux/redux";
import requestQueryParamsSlice from "../../../../../../../../redux/reducers/requestQueryParamsSlice";

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

import { ParamsListItem } from "./ParamsListItem";

import "./QueryParams.scss";

/** TODO:
 * ***
 * ✓ Реализовать нормальные стили для юнитов списка параметров
 * * ✓ Подсказки к кнопкам управления
 * * ✓ Сделать ровные отступы
 * * ✓ Минимальный размер меню с доп. параметра для запроса
 * ***
 * ✓ Добавить возможность менять имя и значение параметров
 * * ✓ Добавить новый вид инпута
 * ✓ Реализовать добавление новых юнитов в список параметров
 * * ✓ Создать новый стор в редаксе для еще не подтвержденных параметров
 * ✓ Реализовать удаление юнитов из списка
 * * ✓ (баг - удаляется нужный элемент, но рендеритяс так, будто удаляется последни элемент списка, при обновлении страницы список рендерится правильно)
 * * ✓ Удаление всех параметров в один клик
 * ✓ Реализовать выбор только нужных для запроса параметров
 * ✓ Переписать хранение параметров на массивы (нужно чтобы одновременно могли существовать параметры с одинаковыми именами)
 * ***
 * ✓ Реализовать драг-дроп юнитов в списке
 * ***
 * ✓ Вынести юниты списка параметров в отдельный компонент
 * ✓ Подшлефовать логику
 */

export const ParamsList = () => {
	const dispatch = useAppDispatch();
	const { updateParamsOrder } = requestQueryParamsSlice.actions;
	const requestQueryParams = useAppSelector((state) => state.requestQueryParameters);

	const [dragbleParams, setDragbleParams] = useState(requestQueryParams);
	const dragSensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	);

	function handleDragEnd(event: DragCancelEvent) {
		const { active, over } = event;
		if (active?.id !== over?.id) {
			setDragbleParams((prev) => {
				const activeIndex = prev.findIndex((item) => item._id === active.id);
				const overIndex = prev.findIndex((item) => item._id === over?.id);
				return arrayMove(prev, activeIndex, overIndex);
			});
		}
	}

	useEffect(() => {
		dispatch(updateParamsOrder(dragbleParams));
	}, [dragbleParams]);

	useEffect(() => {
		setDragbleParams(requestQueryParams);
	}, [requestQueryParams]);

	return (
		<>
			<DndContext
				sensors={dragSensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
				modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
			>
				<SortableContext
					items={dragbleParams.map((param) => param._id)}
					strategy={verticalListSortingStrategy}
				>
					{dragbleParams.map((parameter) => (
						<ParamsListItem
							key={parameter._id}
							parameter={parameter}
						/>
					))}
				</SortableContext>
			</DndContext>
		</>
	);
};
