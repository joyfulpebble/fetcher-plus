import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import "./QueryParams.scss";
import { IconTrash, IconGripVertical, IconCheckbox, IconSquare } from "@tabler/icons-react";
import Input from "../../../../../../../UI/Input/Input";
import { useAppDispatch } from "../../../../../../../../hooks/redux/redux";
import requestQueryParamsSlice, {
	type QueryParameter
} from "../../../../../../../../redux/reducers/requestQueryParamsSlice";

interface ParamsListItem {
	parameter: QueryParameter;
}

export const ParamsListItem = ({ parameter }: ParamsListItem) => {
	const dispatch = useAppDispatch();
	const { deleteParameter, updateParameterState, updateParameter } =
		requestQueryParamsSlice.actions;

	const y = useMotionValue(0);
	const dragControls = useDragControls();
	// const boxShadow = useRaisedShadow(y);

	return (
		<Reorder.Item
			value={parameter}
			id={parameter._id}
			style={{ boxShadow: "initial", y }}
			dragListener={false}
			dragControls={dragControls}
		>
			<section
				key={parameter._id}
				className="query_params_item"
			>
				<section className="param_control">
					<div className="param_dragger">
						<IconGripVertical
							size={16}
							onPointerDown={(e) => dragControls.start(e)}
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
		</Reorder.Item>
	);
};
