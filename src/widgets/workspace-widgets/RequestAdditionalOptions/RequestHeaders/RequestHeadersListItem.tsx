import { useCallback } from "react";

import { Select } from "../../../../components/ui/Select/Select";
import Input from "../../../../components/ui/Input/Input";
import { IconTrash, IconGripVertical, IconCheckbox, IconSquare } from "@tabler/icons-react";

import { defaultRequestHeaders } from "../../../../tools/constants";

import { useAppDispatch } from "../../../../hooks/redux/redux";
import requestHeadersSlice, {
	type RequestHeaderItem
} from "../../../../redux/reducers/requestHeadersSlice";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./styles/RequestHeadersListItem.scss";

interface HeadersListItem {
	header: RequestHeaderItem;
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
		dispatch(updateHeaderName({ headerID: header._id, key: newValue }));
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
					<Select
						selectStyle="invisible"
						placeholder="Header name"
						disableSearch={false}
						searchIcon={false}
						data={defaultRequestHeaders}
						initValue={header.key}
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
									headerID: header._id,
									value: e.target.value
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
