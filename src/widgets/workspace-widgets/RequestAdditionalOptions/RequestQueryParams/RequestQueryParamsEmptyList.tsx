import { IconPlus } from "@tabler/icons-react";
import Button from "../../../../components/ui/Buttons/Button";

import "./styles/RequestQueryParams.scss";

interface ParamsEmptyListProps {
	openModalFunc: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmptyRequestParamsList = ({ openModalFunc }: ParamsEmptyListProps) => (
	<div className="query_params_body_empty">
		<div className="params_empty_text">This request does not have a query parameters...</div>
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

export default EmptyRequestParamsList;
