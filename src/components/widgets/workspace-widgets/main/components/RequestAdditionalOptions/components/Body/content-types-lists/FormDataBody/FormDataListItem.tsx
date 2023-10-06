import Input from "../../../../../../../../../UI/Input/Input";
import {
	IconTrash,
	IconGripVertical,
	IconCheckbox,
	IconSquare,
	IconChevronDown,
	IconCheck
} from "@tabler/icons-react";

import { useAppDispatch } from "../../../../../../../../../../hooks/redux/redux";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "../../styles/FormDataListItem.scss";
import { BodyFormDataItem } from "../../../../../../../../../../redux/reducers/requestBodyFormDataSlice";
import Tippy from "@tippyjs/react";

interface FormDataListItem {
	formData: BodyFormDataItem;
}

export const FormDataListItem = ({ formData }: FormDataListItem) => {
	// const dispatch = useAppDispatch();
	// const { deleteHeader, updateHeaderState, updateHeaderName, updateHeaderValue } =
	// 	requestHeadersSlice.actions;

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
		id: formData._id
	});
	const styleOnDrag = {
		transform: CSS.Transform.toString(transform),
		transition
	};

	// const onChange = useCallback((newValue: any) => {
	// 	dispatch(updateHeaderName({ parameterID: header._id, newName: newValue }));
	// }, []);

	return (
		<section
			ref={setNodeRef}
			style={styleOnDrag}
			className="form_data_item"
		>
			<section className="form_data_controls">
				<div className="form_data_dragger">
					<IconGripVertical
						style={{ outline: "none" }}
						size={16}
						{...attributes}
						{...listeners}
					/>
				</div>
				<div className="form_data_select">
					{formData.isUsed ? (
						<IconCheckbox
							size={16}
							// onClick={() => {
							// }}
						/>
					) : (
						<IconSquare
							size={16}
							// onClick={() => {
							// }}
						/>
					)}
				</div>
			</section>
			<section className="form_data_key_val">
				<div className="form_data_key">
					<Input
						name={`form_data_key=${formData.key}`}
						placeholder="Data key"
						inputStyle="invisible"
						// onChange={(e) => {
						// 	dispatch(
						// 	);
						// }}
						defaultValue={formData.key}
					/>
					<Tippy
						className="form_data_value_type_tippy"
						placement="bottom"
						content={
							<div className="form_data_value_type_list">
								<div
									className={`form_data_type_item ${
										formData.valueType.toLowerCase() === "text" && "selected"
									}`}
								>
									<span>Text</span>
									{formData.valueType.toLowerCase() === "text" && <IconCheck size={14} />}
								</div>
								<div
									className={`form_data_type_item ${
										formData.valueType.toLowerCase() === "file" && "selected"
									}`}
								>
									<span>File</span>
									{formData.valueType.toLowerCase() === "file" && <IconCheck size={14} />}
								</div>
							</div>
						}
						interactive={true}
						hideOnClick={true}
						animation="shift-away"
						trigger="click"
						arrow={false}
						zIndex={10}
						offset={[10, 5]}
					>
						<div className="form_data_select">
							<span className="form_data_current">{formData.valueType}</span>
							<IconChevronDown size={14} />
						</div>
					</Tippy>
				</div>
				<div className="form_data_val">
					<Input
						name={`form_data_value=${formData.value}`}
						placeholder="Data value"
						inputStyle="invisible"
						// onChange={(e) => {
						// 	dispatch(
						// 	);
						// }}
						defaultValue={formData.value}
					/>
					<div className="form_data_delete">
						<IconTrash
							size={16}
							// onClick={() => {
							// }}
						/>
					</div>
				</div>
			</section>
		</section>
	);
};
