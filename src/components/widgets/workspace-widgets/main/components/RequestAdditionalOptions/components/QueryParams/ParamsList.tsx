import { useAppDispatch, useAppSelector } from "../../../../../../../../hooks/redux/redux";

import "./QueryParams.scss";
import { IconTrash, IconGripVertical, IconCheckbox, IconSquare } from "@tabler/icons-react";
import requestQueryParamsSlice from "../../../../../../../../redux/reducers/requestQueryParamsSlice";
import Input from "../../../../../../../UI/Input/Input";

/** TODO:
 * ***
 * ✓ Реализовать нормальные стили для юнитов списка параметров
 * * - Подсказки к кнопкам управления
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
 * - Вынести юниты списка параметров в отдельный компонент
 * - Подшлефовать логику
 */

export const ParamsList = () => {
	const dispatch = useAppDispatch();
	const { deleteParameter, updateParameterState, updateParameter } =
		requestQueryParamsSlice.actions;
	const requestQueryParams = useAppSelector((state) => state.requestQueryParameters);

	const list = requestQueryParams.map((parameter) => (
		<section
			key={parameter._id}
			className="query_params_item"
		>
			<section className="param_control">
				<div className="param_dragger">
					<IconGripVertical size={16} />
				</div>
				<div className="param_select">
					{parameter.isUsed ? (
						<IconCheckbox
							size={16}
							onClick={() => {
								dispatch(updateParameterState(parameter._id));
							}}
						/>
					) : (
						<IconSquare
							size={16}
							onClick={() => {
								dispatch(updateParameterState(parameter._id));
							}}
						/>
					)}
				</div>
			</section>
			<section className="psrams_key_val">
				<div className="params_key">
					<Input
						name={`parameter_key=${parameter.key}`}
						placeholder="Parameter key"
						inputStyle="invisible"
						onChange={(e) => {
							dispatch(
								updateParameter({
									parameterID: parameter._id,
									updateType: "key",
									value: e.target.value
								})
							);
						}}
						defaultValue={parameter.key}
					/>
				</div>
				<div className="params_val">
					<Input
						name={`parameter_value=${parameter.value}`}
						placeholder="Parameter value"
						inputStyle="invisible"
						onChange={(e) => {
							dispatch(
								updateParameter({
									parameterID: parameter._id,
									updateType: "value",
									value: e.target.value
								})
							);
						}}
						defaultValue={parameter.value}
					/>
					<div className="param_delete">
						<IconTrash
							size={16}
							onClick={() => {
								dispatch(deleteParameter(parameter._id));
							}}
						/>
					</div>
				</div>
			</section>
		</section>
	));

	return <>{list}</>;
};
