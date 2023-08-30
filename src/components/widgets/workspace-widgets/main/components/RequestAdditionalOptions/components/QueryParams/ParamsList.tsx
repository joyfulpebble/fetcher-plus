import { useState } from "react";

import { useAppSelector } from "../../../../../../../../hooks/redux/redux";

import "./QueryParams.scss";
import { Matrix } from "../../../../../../../../tools/common/Matrix";
import { IconTrash, IconGripVertical, IconCheckbox } from "@tabler/icons-react";

/** TODO:
 * ***
 * + Реализовать нормальные стили для юнитов списка параметров
 * * - Подсказки к кнопкам управления
 * * + Сделать ровные отступы
 * * + Минимальный размер меню с доп. параметра для запроса
 * ***
 * - Добавить возможность менять имя и значение параметров
 * * - Добавить новый вид инпута
 * + Реализовать добавление новых юнитов в список параметров
 * * + Создать новый стор в редаксе для еще не подтвержденных параметров
 * - Реализовать удаление юнитов из списка
 * * - Удаление всех параметров в один клик
 * - Реализовать выбор только нужных для запроса параметров
 * - Переписать хранение параметров на массивы (нужно чтобы одновременно могли существовать параметры с одинаковыми именами)
 * ***
 * - Реализовать драг-дроп юнитов в списке
 * ***
 * - Вынести юниты списка параметров в отдельный компонент
 * - Подшлефовать логику
 */

export const ParamsList = () => {
	const requestQueryParams = useAppSelector((state) => state.requestQueryParameters);

	const paramsMatrix = new Matrix().ofArrays(requestQueryParams);

	const list = paramsMatrix.map((parameter, index) => (
		<section
			key={index}
			className="query_params_item"
		>
			<section className="param_control">
				<div className="param_dragger">
					<IconGripVertical size={16} />
				</div>
				<div className="param_select">
					<IconCheckbox size={16} />
				</div>
			</section>
			<section className="psrams_key_val">
				<div className="params_key">{parameter[0]}</div>
				<div className="params_val">
					{parameter[1]}

					<div className="param_delete">
						<IconTrash size={16} />
					</div>
				</div>
			</section>
		</section>
	));

	return <>{list}</>;
};
