import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../../../../hooks/redux/redux";
import requestConfigSlice from "../../../../../../../../redux/reducers/requestConfigSlice";

import "./ExtraParams.scss";
import { Matrix } from "../../../../../../../../tools/common/Matrix";
import { IconCheckbox, IconGripVertical, IconTrash } from "@tabler/icons-react";

export const ParamsList = () => {
	const dispatch = useAppDispatch();
	const { requestParams } = useAppSelector((state) => state.requestConfigReducer);
	const { updateParams } = requestConfigSlice.actions;

	const [editableParams, setEditableParams] = useState<{ [key: string]: string }>({
		key: "value",
		aa: "aa"
	});

	const paramsMatrix = new Matrix().ofArrays(editableParams);

	const list = paramsMatrix.map((parameter, index) => (
		<section
			key={index}
			className="extra_params_item"
		>
			<section className="params_dragger">
				<IconGripVertical size={16} />
			</section>
			<section className="psrams_key_val">
				<div className="params_key">{parameter[0]}</div>
				<div className="params_val">{parameter[1]}</div>
			</section>
			<section className="params_controls">
				<IconCheckbox
					style={{ cursor: "pointer" }}
					size={16}
				/>
				<IconTrash
					style={{ cursor: "pointer" }}
					size={16}
				/>
			</section>
		</section>
	));

	return <>{list}</>;
};
