import { ParamsListProps } from '../types/elements';
import { DynamicObjectKeysI } from '../types/simple_models';

import List from './UI/List/List';

function ParamsList({displayedParameters, parameters, setDisplayedParameters, setParameters}: ParamsListProps): JSX.Element {
  const deleteParameterFromList = (index: number): void => {
    const PARAMETER_KEY_FROM_LIST: string = `${index}`;
    delete parameters[PARAMETER_KEY_FROM_LIST];

    const parametersAsArrays: Array<(number | string)[]> = displayedParameters.filter((element: string | number) => { 
      return element !== displayedParameters[index];
    });
    const parametersAsObject: DynamicObjectKeysI = Object.fromEntries(parametersAsArrays);    

    setDisplayedParameters(parametersAsArrays);
    setParameters(parametersAsObject)
  };

  return (
    <List array={displayedParameters} deleteFunction={deleteParameterFromList}/>
  )
}

export default ParamsList;