import Input from "../../../../../../../UI/Input/Input";
import { IconTrash, IconGripVertical, IconCheckbox, IconSquare } from "@tabler/icons-react";

import { useAppDispatch } from "../../../../../../../../hooks/redux/redux";
import requestHeadersSlice, {
	type Header
} from "../../../../../../../../redux/reducers/requestHeadersSlice";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

import "../QueryParams/styles/ParamsListItem.scss";

interface HeadersListItem {
	header: Header;
}

export const HeadersListItem = ({ header }: HeadersListItem) => {
	const dispatch = useAppDispatch();
	const { addHeader } = requestHeadersSlice.actions;

	// const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
	// 	id: parameter._id
	// });
	// const styleOnDrag = {
	// 	transform: CSS.Transform.toString(transform),
	// 	transition
	// };

	return (
		<section
			// ref={setNodeRef}
			// style={styleOnDrag}
			className="query_params_item"
		>
			<section className="param_control">
				<div className="param_dragger">
					<IconGripVertical
						style={{ outline: "none" }}
						size={16}
						// {...attributes}
						// {...listeners}
					/>
				</div>
				<div className="param_select">
					{header.isUsed ? (
						<IconCheckbox
							size={16}
							onClick={() => {
								// dispatch(updateParameterState(header._id));
							}}
						/>
					) : (
						<IconSquare
							size={16}
							onClick={() => {
								// dispatch(updateParameterState(header._id));
							}}
						/>
					)}
				</div>
			</section>
			<section className="psrams_key_val">
				<div className="params_key">
					<Input
						name={`parameter_key=${header.key}`}
						placeholder="Parameter key"
						inputStyle="invisible"
						onChange={(e) => {
							// dispatch(
							// 	updateParameter({
							// 		parameterID: header._id,
							// 		updateType: "key",
							// 		value: e.target.value
							// 	})
							// );
						}}
						defaultValue={header.key}
					/>
				</div>
				<div className="params_val">
					<Input
						name={`parameter_value=${header.value}`}
						placeholder="Parameter value"
						inputStyle="invisible"
						onChange={(e) => {
							// dispatch(
							// 	updateParameter({
							// 		parameterID: header._id,
							// 		updateType: "value",
							// 		value: e.target.value
							// 	})
							// );
						}}
						defaultValue={header.value}
					/>
					<div className="param_delete">
						<IconTrash
							size={16}
							onClick={() => {
								// dispatch(deleteParameter(header._id));
							}}
						/>
					</div>
				</div>
			</section>
		</section>
	);
};
