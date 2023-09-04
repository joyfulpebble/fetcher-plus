import Button from "../../../../../../../UI/Buttons/Button";

interface ParamsEmptyListProps {
	openModalFunc: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ParamsEmptyList = ({ openModalFunc }: ParamsEmptyListProps) => (
	<div className="query_params_body_empty">
		<div className="params_empty_text">This request does not have query parameters</div>
		<Button
			buttonStyle="invisible"
			content="Add new"
			onClick={() => {
				openModalFunc(true);
			}}
		/>
	</div>
);
