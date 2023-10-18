import { IconPlus } from "@tabler/icons-react";

import { useState } from "react";

import "./FileSelect.scss";
import Tippy from "@tippyjs/react";
import { useClassnames } from "../../../hooks/useClassnames";

interface FileSelectProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	elementStyle?: "small" | "default";
	placeholder?: string;
}

export const FileSelect = ({
	placeholder,
	elementStyle = "default",
	onChange
}: FileSelectProps) => {
	const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

	const file_select_classnames = useClassnames({
		file_select_wrapper_default: elementStyle === "default",
		file_select_wrapper_small: elementStyle === "small"
	});

	return (
		<div className={file_select_classnames}>
			{selectedFileName && <div className="selected_file_name">{selectedFileName}</div>}
			{selectedFileName ? (
				<Tippy
					className="file_select_select_another_file_tippy"
					placement="top-end"
					content={"Click to upload another"}
					hideOnClick={true}
					animation="shift-away"
					arrow={true}
					offset={[0, 10]}
				>
					<label className="select_new_file">
						<div className="placeholder">
							{!selectedFileName && placeholder && (
								<div className="select_new_file_placeholder">{placeholder}</div>
							)}
							<IconPlus size={14} />
						</div>
						<input
							type="file"
							onChange={async (event) => {
								setSelectedFileName(event.target.files![0].name);
								onChange(event);
							}}
						/>
					</label>
				</Tippy>
			) : (
				<label className="select_new_file">
					<div className="placeholder">
						{!selectedFileName && placeholder && (
							<div className="select_new_file_placeholder">{placeholder}</div>
						)}
					</div>
					<IconPlus size={16} />
					<input
						type="file"
						onChange={async (event) => {
							setSelectedFileName(event.target.files![0].name);
							onChange(event);
						}}
					/>
				</label>
			)}
		</div>
	);
};
