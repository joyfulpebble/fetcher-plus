import { useState, useRef } from "react";

import { useAppDispatch } from "../../../../../../../../hooks/redux/redux";
import requestHeadersSlice from "../../../../../../../../redux/reducers/requestHeadersSlice";

import { defaultRequestHeaders } from "../../../../../../../../tools/constants";

import { HeadersList } from "./HeadersList";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import Modal from "../../../../../../../UI/Modal/Modal";
import { Dropdown } from "../../../../../../../UI/Dropdown/Dropdown";

import { v1 as uuidv1 } from "uuid";
import "./styles/Headers.scss";
import Input from "../../../../../../../UI/Input/Input";
import Divider from "../../../../../../../UI/Divider/Divider";

/** TODO:
 * - Переименовать классы стилей
 * ✓ Список дефолтных заголовков
 * ✓ Стор для кастомных заголовков
 * * ✓ Добавление
 * * ✓ Удаление (по выбору / все стразу)
 * * ✓ Выключение
 * * ✓ Перетаскивание
 * * ✓ Инлайн изменение значения и ключа
 * * * - `invisible` стиль для селекта
 * * * - Подсказки для имен заголовков (поиск)
 * ✓ Скролл списка заголовков
 ***
 * ✓ Пофиксить селект (открывается при открытии модалки (так быть не должно))
 * ✓ Пофиксить селект (выбранное в предыдуший раз значение остается при новом открытии модалки)
 * ✓ Пофиксить нижниу уголки селекта
 * ✓ Реализовать поиск в селекте
 ***
 * - Пофиксить отступы в меню выбора метода
 */

export const Headers = () => {
	const [newHeaderModalView, setNewHeaderModalView] = useState(false);
	const [selectedHeader, setSelectedHeader] = useState<string>("");

	const defaultHeaderValueRef = useRef<HTMLInputElement>(null);
	const customHeaderNameRef = useRef<HTMLInputElement>(null);
	const customHeaderValueRef = useRef<HTMLInputElement>(null);

	const dispatch = useAppDispatch();
	const { addHeader, deleteAllHeaders } = requestHeadersSlice.actions;

	return (
		<>
			<Modal
				title="Select header"
				visibility={newHeaderModalView}
				onCancel={() => true}
				onSubmit={() => {
					dispatch(
						addHeader({
							_id: uuidv1(),
							isUsed: true,
							name: selectedHeader || String(customHeaderNameRef.current?.value),
							value:
								String(defaultHeaderValueRef.current?.value) ||
								String(customHeaderValueRef.current?.value)
						})
					);

					return true;
				}}
				onClose={() => setNewHeaderModalView(false)}
			>
				<div
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "row",
						alignItems: "end",
						justifyContent: "space-between"
					}}
				>
					<div>
						<Dropdown
							title="Select from the existing ones"
							placeholder="Header name"
							searchIcon={false}
							data={defaultRequestHeaders}
							selectedValue={selectedHeader}
							setSelectedValue={setSelectedHeader}
							disableSearch={false}
							itemsInView={4}
						/>
					</div>
					<div>
						<Input
							label="Enter header value"
							placeholder="Header value"
							innerRef={defaultHeaderValueRef}
						/>
					</div>
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
								onClick={() => {
									dispatch(deleteAllHeaders());
								}}
							/>
						</Tippy>
					</div>
				</div>
			</section>
			<section className="headers_body_wrapper">
				<HeadersList />
			</section>
		</>
	);
};
