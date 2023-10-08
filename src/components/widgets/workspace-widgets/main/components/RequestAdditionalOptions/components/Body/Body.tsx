import { useAppDispatch, useAppSelector } from "../../../../../../../../hooks/redux/redux";
import { useClassnames } from "../../../../../../../../hooks/useClassnames";

import requestBodyFormDataSlice from "../../../../../../../../redux/reducers/requestBodyFormDataSlice";

import { BodyNone } from "./BodyNone";
import { FormDataList } from "./content-types-lists/FormDataBody/FormDataList";
import { FormDataEmptyList } from "./content-types-lists/FormDataBody/FormDataEmptyList";

import { IconChevronDown, IconFilePlus, IconPlus, IconTrash } from "@tabler/icons-react";
import { BodyContentTypesList } from "./content-types-lists/BodyContentTypesList";
import { BodyRawTypesList } from "./content-types-lists/BodyRawTypesList";
import Tippy from "@tippyjs/react";

import { v1 } from "uuid";

import "./styles/Body.scss";
import "./styles/BodyNone.scss";
import "./styles/FormDataList.scss";

/** TODO:
 * - Пофиксить сообщение об отсутствии елементов в form-data сторе
 * - Пофиксить отображение items в кастомных методах запроса
 * - Сделать разный функционал кнопки которая очищает весь стор в body для разных contentType
 * - Модалка для добавления form-data элементов
 * - Декомпозировать элементы по типу списков и всплывающих подсказок
 */

export const Body = () => {
	const dispatch = useAppDispatch();
	const { addBodyFormDataTextItem } = requestBodyFormDataSlice.actions;
	const { contentType, rawType } = useAppSelector((state) => state.requestBodyTypeReducer);
	const bodyFormData = useAppSelector((state) => state.requestBodyFormDataReducer);

	const request_body_classnames = useClassnames({
		request_body_none_wrapper: contentType === "none",
		request_body_form_data_wrapper: contentType === "form-data",
		// !
		request_body_form_data_wrapper_empty: bodyFormData.length === 0
		// !
	});

	return (
		<>
			<section className="request_additional_option_header_wrapper">
				<div className="body_conntent_type_select_wrapper">
					<span className="request_additional_option_name">Body</span>
					<div className="request_additional_body_type">
						<Tippy
							className="body_content_type_tippy_wrapper"
							placement="bottom"
							content={<BodyContentTypesList />}
							interactive={true}
							hideOnClick={true}
							animation="shift-away"
							trigger="click"
							arrow={false}
							zIndex={10}
							offset={[49, 5]}
						>
							<div className="body_content_type_select">
								<span className="body_content_type">{contentType}</span>
								<IconChevronDown size={15} />
							</div>
						</Tippy>
					</div>
					{contentType === "raw" && (
						<Tippy
							className="body_raw_type_tippy_wrapper"
							placement="bottom"
							content={<BodyRawTypesList />}
							interactive={true}
							hideOnClick={true}
							animation="shift-away"
							trigger="click"
							arrow={false}
							zIndex={10}
							offset={[15, 5]}
						>
							<div className="body_raw_type_select">
								<span className="body_raw_type">{rawType}</span>
								<IconChevronDown size={15} />
							</div>
						</Tippy>
					)}
				</div>
				<div className="request_additional_option_controls">
					{contentType === "raw" && (
						<div className="add_new">
							<Tippy
								className="base_tippy_wrapper"
								placement="top"
								content={"Import"}
								animation="shift-away"
								arrow={true}
								trigger="mouseenter"
								zIndex={0}
							>
								<IconFilePlus
									size={16}
									stroke={2}
								/>
							</Tippy>
						</div>
					)}
					{contentType === "form-data" && (
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
									onClick={() => {
										dispatch(
											addBodyFormDataTextItem({
												_id: v1(),
												isUsed: true,
												key: "key",
												value: "value",
												valueType: "text"
											})
										);
									}}
								/>
							</Tippy>
						</div>
					)}
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
							/>
						</Tippy>
					</div>
				</div>
			</section>
			<section className={request_body_classnames}>
				{contentType === "none" && <BodyNone />}
				{contentType === "form-data" && !!bodyFormData.length ? (
					<FormDataList />
				) : (
					<FormDataEmptyList openModalFunc={() => {}} />
				)}
			</section>
		</>
	);
};
