import { Reorder } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../../../../../../hooks/redux/redux";
import { ParamsListItem } from "./ParamsListItem";
import requestQueryParamsSlice from "../../../../../../../../redux/reducers/requestQueryParamsSlice";
import { useEffect, useState } from "react";
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
 * - Реализовать драг-дроп юнитов в списке
 * ***
 * ✓ Вынести юниты списка параметров в отдельный компонент
 * - Подшлефовать логику
 */

export const ParamsList = () => {
	const dispatch = useAppDispatch();
	const { updateParamsOrder } = requestQueryParamsSlice.actions;
	const requestQueryParams = useAppSelector((state) => state.requestQueryParameters);

	const [first, setfirst] = useState(requestQueryParams);

	useEffect(() => {
		dispatch(updateParamsOrder(first));
	}, [first]);

	return (
		<>
			<Reorder.Group
				as="div"
				axis="y"
				onReorder={setfirst}
				values={first}
				layoutScroll={true}
				className="query_params_body_wrapper"
			>
				{first.map((parameter) => (
					<ParamsListItem
						key={parameter._id}
						parameter={parameter}
					/>
				))}
			</Reorder.Group>
		</>
	);
};
