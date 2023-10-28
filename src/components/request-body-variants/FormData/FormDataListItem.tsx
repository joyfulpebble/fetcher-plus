import RequestFormDataValueTypeList from "../../lists/RequestFormDataValueTypeList/RequestFormDataValueTypeList";
import FileSelect from "../../ui/FileSelect/FileSelect";
import Input from "../../ui/Input/Input";

import { useFormDataListItem } from "./hooks/useFormDataListItem";
import { type BodyFormDataItem } from "../../../redux/reducers/requestBodyFormDataSlice";

import Tippy from "@tippyjs/react";
import {
	IconTrash,
	IconGripVertical,
	IconCheckbox,
	IconSquare,
	IconChevronDown,
	IconX
} from "@tabler/icons-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./styles/FormDataListItem.scss";

interface FormDataListItemProps {
	formData: BodyFormDataItem;
}

const FormDataListItem = ({ formData }: FormDataListItemProps) => {
	const {
		updateFormDataItemState,
		updateFormDataItemKeyFunc,
		updateFormDataItemValueFunc,
		removeFileFromItemValueFunc,
		fileSelectFunc,
		deletFormDataItemFunc
	} = useFormDataListItem(formData);

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
		id: formData._id
	});
	const styleOnDrag = {
		transform: CSS.Transform.toString(transform),
		transition
	};

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
							onClick={() => updateFormDataItemState()}
						/>
					) : (
						<IconSquare
							size={16}
							onClick={() => updateFormDataItemState()}
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
						onChange={(event) => updateFormDataItemKeyFunc(event)}
						defaultValue={formData.key}
					/>
					<Tippy
						className="default_tippy"
						placement="bottom"
						content={<RequestFormDataValueTypeList item={formData} />}
						interactive={true}
						hideOnClick={true}
						animation="shift-away"
						trigger="click"
						arrow={false}
						zIndex={10}
						offset={[9, 5]}
					>
						<div className="form_data_select">
							<span className="form_data_current">{formData.valueType}</span>
							<IconChevronDown size={14} />
						</div>
					</Tippy>
				</div>
				<div className="form_data_val">
					{formData.valueType === "text" ? (
						<Input
							name={`form_data_value=${formData.value}`}
							placeholder="Data value"
							inputStyle="invisible"
							onChange={(event) => updateFormDataItemValueFunc(event)}
							defaultValue={formData.value}
						/>
					) : formData.fileInfo.id ? (
						<div className="form_data_file_item">
							<div className="file_name">{formData.fileInfo.name}</div>
							<IconX
								className="form_data_file_item_delete"
								size={12}
								onClick={() => removeFileFromItemValueFunc()}
							/>
						</div>
					) : (
						<FileSelect
							elementStyle="small"
							onChange={(event) => fileSelectFunc(event)}
						/>
					)}
					<div className="form_data_delete">
						<IconTrash
							size={16}
							onClick={() => deletFormDataItemFunc()}
						/>
					</div>
				</div>
			</section>
		</section>
	);
};

export default FormDataListItem;
