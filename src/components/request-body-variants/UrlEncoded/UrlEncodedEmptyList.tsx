import { IconPlus } from "@tabler/icons-react";
import Button from "../../ui/Buttons/Button";

import "./styles/UrlEncoded.scss";

interface UrlEncodedEmptyListProps {
	modalFunc: React.Dispatch<React.SetStateAction<boolean>>;
}

const UrlEncodedEmptyList = ({ modalFunc }: UrlEncodedEmptyListProps) => (
	<div className="url_encoded_empty">
		<div className="url_encoded_empty_text">This request does not have form data body...</div>
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
				modalFunc(true);
			}}
		/>
	</div>
);

export default UrlEncodedEmptyList;
