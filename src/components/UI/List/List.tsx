import { ListPropsI } from "../../../types/elements";

function List({ array, deleteFunction }: ListPropsI): JSX.Element {
	const listElements = array.map((elem: any, index: number) => (
		<div key={index}>
			<div key={elem[0]}>{elem[0]}</div>
			<div key={`${elem[0]}'s_value`}>{elem[1]}</div>
			<button
				onClick={() => {
					deleteFunction(index);
				}}
			>
				-
			</button>
		</div>
	));

	return <div>{listElements}</div>;
}

export default List;
