import { IconPlus } from "@tabler/icons-react";
import Button from "../../../../../../../UI/Buttons/Button";

interface HeadersEmptyListProps {
	openModalFunc: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeadersEmptyList = ({ openModalFunc }: HeadersEmptyListProps) => (
	<div className="headers_body_empty">
		<div className="headers_empty_text">This request does not have headers...</div>
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
