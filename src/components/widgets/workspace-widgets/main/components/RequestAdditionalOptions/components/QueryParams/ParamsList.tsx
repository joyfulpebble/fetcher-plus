import { useAppDispatch, useAppSelector } from "../../../../../../../../hooks/redux/redux";

import "./QueryParams.scss";
import { IconTrash, IconGripVertical, IconCheckbox, IconSquare } from "@tabler/icons-react";
import requestQueryParamsSlice from "../../../../../../../../redux/reducers/requestQueryParamsSlice";
import Input from "../../../../../../../UI/Input/Input";

/** TODO:
 * ***
 * + Реализовать нормальные стили для юнитов списка параметров
 * * - Подсказки к кнопкам управления
 * * + Сделать ровные отступы
 * * + Минимальный размер меню с доп. параметра для запроса
 * ***
 * + Добавить возможность менять имя и значение параметров
 * * + Добавить новый вид инпута
 * + Реализовать добавление новых юнитов в список параметров
 * * + Создать новый стор в редаксе для еще не подтвержденных параметров
 * + Реализовать удаление юнитов из списка
 * * + Удаление всех параметров в один клик
 * + Реализовать выбор только нужных для запроса параметров
 * + Переписать хранение параметров на массивы (нужно чтобы одновременно могли существовать параметры с одинаковыми именами)
 * ***
 * - Реализовать драг-дроп юнитов в списке
 * ***
 * - Вынести юниты списка параметров в отдельный компонент
 * - Подшлефовать логику
 */

export const ParamsList = () => {
	const dispatch = useAppDispatch();
	const {
		deleteParameter,
		setNotUsedParameter,
		unsetNotUsedParameter,
		updateParameterKey,
		updateParameterValue
	} = requestQueryParamsSlice.actions;
	const requestQueryParams = useAppSelector((state) => state.requestQueryParameters);

	const list = requestQueryParams.map((parameter, index) => (
		<section
			key={index}
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
								dispatch(setNotUsedParameter(index));
							}}
						/>
					) : (
						<IconSquare
							size={16}
							onClick={() => {
								dispatch(unsetNotUsedParameter(index));
							}}
						/>
					)}
				</div>
			</section>
			<section className="psrams_key_val">
				<div className="params_key">
					<Input
						name={`parameter_key=${parameter.parameterKey}`}
						placeholder="Parameter key"
						inputStyle="invisible"
						onChange={(e) => {
							dispatch(updateParameterKey({ parameterIndex: index, newValue: e.target.value }));
						}}
						defaultValue={parameter.parameterKey}
					/>
				</div>
				<div className="params_val">
					<Input
						name={`parameter_value=${parameter.parameterValue}`}
						placeholder="Parameter value"
						inputStyle="invisible"
						onChange={(e) => {
							dispatch(updateParameterValue({ parameterIndex: index, newValue: e.target.value }));
						}}
						defaultValue={parameter.parameterValue}
					/>
					<div className="param_delete">
						<IconTrash
							size={16}
							onClick={() => {
								dispatch(deleteParameter(index));
							}}
						/>
					</div>
				</div>
			</section>
		</section>
	));

	return <>{list}</>;
};
