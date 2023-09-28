import { useCallback } from "react";

import { Dropdown } from "../../../../../../../UI/Dropdown/Dropdown";
import Input from "../../../../../../../UI/Input/Input";
import { IconTrash, IconGripVertical, IconCheckbox, IconSquare } from "@tabler/icons-react";

import { defaultRequestHeaders } from "../../../../../../../../tools/constants";

import { useAppDispatch } from "../../../../../../../../hooks/redux/redux";
import requestHeadersSlice, {
	type Header
} from "../../../../../../../../redux/reducers/requestHeadersSlice";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./styles/HeadersListItem.scss";

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

	const onChange = useCallback((newValue: any) => {
		dispatch(updateHeaderName({ parameterID: header._id, newName: newValue }));
	}, []);

	return (
		<section
			ref={setNodeRef}
			style={styleOnDrag}
			className="header_item"
		>
			<section className="header_controls">
				<div className="header_dragger">
					<IconGripVertical
						style={{ outline: "none" }}
						size={16}
						{...attributes}
						{...listeners}
					/>
				</div>
				<div className="header_select">
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
			<section className="header_name_val">
				<div className="header_name">
					<Dropdown
						selectStyle="invisible"
						placeholder="Header name"
						disableSearch={false}
						searchIcon={false}
						data={defaultRequestHeaders}
						initValue={header.name}
						onChange={onChange}
					/>
				</div>
				<div className="header_val">
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
					<div className="header_delete">
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
