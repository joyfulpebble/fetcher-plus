import { useState } from "react";

import { useAppSelector } from "../../../../../../../../hooks/redux/redux";

import "./QueryParams.scss";
import { Matrix } from "../../../../../../../../tools/common/Matrix";
import { IconDotsVertical, IconGripVertical } from "@tabler/icons-react";

/** TODO:
 * ***
 * - Реализовать нормальные стили для юнитов списка параметров (в процессе)
 * * - Изменение цвета при наведении на элементы управления
 * * - Сделать ровные отступы
 * ***
 * - Добавить возможность менять имя и значение параметров
 * * - Добавить новый вид инпута
 * - Реализовать добавление новых юнитов в список параметров (в процессе)
 * * - Создать новый стор в редаксе для еще не подтвержденных параметров
 * - Реализовать удаление юнитов из списка
 * * - Удаление всех параметров в один клик
 * - Реализовать выбор только нужных для запроса параметров
 * ***
 * - Реализовать драг-дроп юнитов в списке
 * ***
 * - Вынести юниты списка параметров в отдельный компонент
 */

export const ParamsList = () => {
	const { requestParams } = useAppSelector((state) => state.requestConfigReducer);

	const [editableParams, setEditableParams] = useState(requestParams);

	const paramsMatrix = new Matrix().ofArrays(requestParams);

	const list = paramsMatrix.map((parameter, index) => (
		<section
			key={index}
			className="query_params_item"
		>
			<section className="params_dragger">
				<IconGripVertical size={16} />
			</section>
			<section className="psrams_key_val">
				<div className="params_key">{parameter[0]}</div>
				<div className="params_val">{parameter[1]}</div>
			</section>
			<section className="params_controls">
				<IconDotsVertical
					style={{ cursor: "pointer" }}
					size={16}
				/>
			</section>
		</section>
	));

	return <>{list}</>;
};
