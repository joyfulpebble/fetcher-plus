import type { ElementsT } from "../types/elements";

import List from "./UI/List/List";

/*
	! Переделать ссписок, добавить стили 
 */

function ParamsList({
	displayedParameters,
	parameters,
	setDisplayedParameters,
	setParameters
}: ElementsT.ParamsListProps): JSX.Element {
	const deleteParameterFromList = (index: number): void => {
		const PARAMETER_KEY_FROM_LIST: string = `${index}`;
		// delete parameters[PARAMETER_KEY_FROM_LIST];

		const parametersAsArrays: [string, string | number][] = displayedParameters.filter(
			(element: [string, string | number]) => element !== displayedParameters[index]
		);
		const parametersAsObject: object = Object.fromEntries(parametersAsArrays);

		setDisplayedParameters(parametersAsArrays);
		setParameters(parametersAsObject);
	};

	return (
		<List
			array={displayedParameters}
			deleteFunction={deleteParameterFromList}
		/>
	);
}

export default ParamsList;
