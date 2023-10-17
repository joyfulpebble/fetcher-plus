import Input from "../../../../components/ui/Input/Input";
import { IconTrash, IconGripVertical, IconCheckbox, IconSquare } from "@tabler/icons-react";

import { useAppDispatch } from "../../../../hooks/redux/redux";
import requestQueryParamsSlice, {
	type QueryParameter
} from "../../../../redux/reducers/requestQueryParamsSlice";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./styles/RequestQueryParamsListItem.scss";

interface RequestQueryParamsListItemProps {
	parameter: QueryParameter;
}

export const ParamsListItem = ({ parameter }: RequestQueryParamsListItemProps) => {
	const dispatch = useAppDispatch();
	const { deleteParameter, updateParameterState, updateParameter } =
		requestQueryParamsSlice.actions;

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
		id: parameter._id
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
					{parameter.isUsed ? (
						<IconCheckbox
							size={16}
							onClick={() => {
								dispatch(updateParameterState(parameter._id));
							}}
						/>
					) : (
						<IconSquare
							size={16}
							onClick={() => {
								dispatch(updateParameterState(parameter._id));
							}}
						/>
					)}
				</div>
			</section>
			<section className="psrams_key_val">
				<div className="params_key">
					<Input
						name={`parameter_key=${parameter.key}`}
						placeholder="Parameter key"
						inputStyle="invisible"
						onChange={(e) => {
							dispatch(
								updateParameter({
									parameterID: parameter._id,
									updateType: "key",
									value: e.target.value
								})
							);
						}}
						defaultValue={parameter.key}
					/>
				</div>
				<div className="params_val">
					<Input
						name={`parameter_value=${parameter.value}`}
						placeholder="Parameter value"
						inputStyle="invisible"
						onChange={(e) => {
							dispatch(
								updateParameter({
									parameterID: parameter._id,
									updateType: "value",
									value: e.target.value
								})
							);
						}}
						defaultValue={parameter.value}
					/>
					<div className="param_delete">
						<IconTrash
							size={16}
							onClick={() => {
								dispatch(deleteParameter(parameter._id));
							}}
						/>
					</div>
				</div>
			</section>
		</section>
	);
};
