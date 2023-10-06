import { IconPlus } from "@tabler/icons-react";
import Button from "../../../../../../../../../UI/Buttons/Button";

interface HeadersEmptyListProps {
	openModalFunc: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormDataEmptyList = ({ openModalFunc }: HeadersEmptyListProps) => (
	<div className="form_data_empty">
		<div className="form_data_empty_text">This request does not have form data body...</div>
		<Button
			icon={
				<IconPlus
					size={12}
					stroke={4}
				/>
			}
			buttonStyle="invisible"
			content="Add new"
			onClick={() => {
				openModalFunc(true);
			}}
		/>
	</div>
);
