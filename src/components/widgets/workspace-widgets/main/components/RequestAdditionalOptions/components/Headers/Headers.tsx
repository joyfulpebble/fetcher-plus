import { useState } from "react";

import { defaultRequestHeaders } from "../../../../../../../../tools/constants";

import { IconPlus, IconTrash } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import Modal from "../../../../../../../UI/Modal/Modal";
import { Dropdown } from "../../../../../../../UI/Dropdown/Dropdown";

/** TODO:
 * ✓ Список дефолтных заголовков
 * - Стор для выбранных заголовков
 * - Стор для кастомных заголовков
 * * - Добавление
 * * - Удаление (по выбору / все стразу)
 * * - Выключение
 * * - Перетаскивание
 * * - Инлайн изменение значения и ключа (с подсказками для ключейзаголовков)
 * - Скролл списка заголовков
 ***
 * ✓ Пофиксить селект (открывается при открытии модалки (так быть не должно))
 * - Реализовать поиск в селекте
 ***
 * - Пофиксить отступы в меню выбора метода
 */

export const Headers = () => {
	const [newHeaderModalView, setNewHeaderModalView] = useState(false);
	const [selectedHeader, setSelectedHeader] = useState("");

	return (
		<>
			<Modal
				title="Select header"
				visibility={newHeaderModalView}
				onCancel={() => true}
				onSubmit={() => true}
				onClose={() => setNewHeaderModalView(false)}
			>
				<div style={{ width: 300 }}>
					<Dropdown
						data={defaultRequestHeaders}
						selectedValue={selectedHeader}
						setSelectedValue={setSelectedHeader}
					/>
				</div>
			</Modal>
			<section className="request_additional_option_header_wrapper">
				<span className="request_additional_option_name">Headers</span>
				<div className="request_additional_option_controls">
					<div className="add_new">
						<Tippy
							className="base_tippy_wrapper"
							placement="top"
							content={"Add new"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
						>
							<IconPlus
								size={16}
								stroke={2}
								onClick={() => {
									setNewHeaderModalView(true);
								}}
							/>
						</Tippy>
					</div>
					<div className="delete_all">
						<Tippy
							className="base_tippy_wrapper"
							placement="top"
							content={"Clear all"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
							offset={[-15, 10]}
						>
							<IconTrash
								size={16}
								stroke={2}
								onClick={() => {}}
							/>
						</Tippy>
					</div>
				</div>
			</section>
			<section>{selectedHeader}</section>
		</>
	);
};
