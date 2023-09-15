import Input from "../../../../../../../UI/Input/Input";
import { IconTrash, IconGripVertical, IconCheckbox, IconSquare } from "@tabler/icons-react";

import { useAppDispatch } from "../../../../../../../../hooks/redux/redux";
import requestHeadersSlice, {
	type Header
} from "../../../../../../../../redux/reducers/requestHeadersSlice";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "../QueryParams/styles/ParamsListItem.scss";

interface HeadersListItem {
	header: Header;
}

export const HeadersListItem = ({ header }: HeadersListItem) => {
	const dispatch = useAppDispatch();
	const { deleteHeader, updateHeaderState, updateHeaderName, updateHeaderValue } =
		requestHeadersSlice.actions;

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
		id: header._id
	});
	const styleOnDrag = {
		transform: CSS.Transform.toString(transform),
		transition
	};

	return (
		<section
			ref={setNodeRef}
			style={styleOnDrag}
			className="query_params_item"
		>
			<section className="param_control">
				<div className="param_dragger">
					<IconGripVertical
						style={{ outline: "none" }}
						size={16}
						{...attributes}
						{...listeners}
					/>
				</div>
				<div className="param_select">
					{header.isUsed ? (
						<IconCheckbox
							size={16}
							onClick={() => {
								dispatch(updateHeaderState(header._id));
							}}
						/>
					) : (
						<IconSquare
							size={16}
							onClick={() => {
								dispatch(updateHeaderState(header._id));
							}}
						/>
					)}
				</div>
			</section>
			<section className="psrams_key_val">
				<div className="params_key">
					<Input
						name={`header_name=${header.name}`}
						placeholder="Header name"
						inputStyle="invisible"
						onChange={(e) => {
							dispatch(
								updateHeaderName({
									parameterID: header._id,
									newName: e.target.value
								})
							);
						}}
						defaultValue={header.name}
					/>
				</div>
				<div className="params_val">
					<Input
						name={`header_value=${header.value}`}
						placeholder="Header value"
						inputStyle="invisible"
						onChange={(e) => {
							dispatch(
								updateHeaderValue({
									parameterID: header._id,
									newValue: e.target.value
								})
							);
						}}
						defaultValue={header.value}
					/>
					<div className="param_delete">
						<IconTrash
							size={16}
							onClick={() => {
								dispatch(deleteHeader(header._id));
							}}
						/>
					</div>
				</div>
			</section>
		</section>
	);
};
