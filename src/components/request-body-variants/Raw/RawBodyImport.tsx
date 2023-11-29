import { useAppDispatch } from "../../../hooks/redux/redux";
import requestBodyRawContentSlice from "../../../redux/reducers/requestBodyRawContentSlice";

import { IconFilePlus } from "@tabler/icons-react";

import "./styles/RawBodyImport.scss";

const RawBodyImport = () => {
	const dispatch = useAppDispatch();
	const { updateRawContent } = requestBodyRawContentSlice.actions;

	return (
		<label className="raw_body_import_wrapper">
			<input
				className="raw_body_import_input"
				type="file"
				onChange={(event) => {
					if (event.target && event.target.files && event.target.files.length != 0) {
						const reader = new FileReader();
						reader.readAsText(event.target.files[0]);

						reader.onload = () => {
							dispatch(updateRawContent(String(reader.result)));
						};
					}
				}}
			/>
			<div className="raw_body_import_icon">
				<IconFilePlus
					size={16}
					stroke={2}
				/>
			</div>
		</label>
	);
};

export default RawBodyImport;
