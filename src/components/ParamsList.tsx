import { useEffect, useState } from 'react';

import { ParamsListProps } from '../../types/elements';
import { DynamicObjectKeys } from '../../types/simple_models';

function ParamsList({displayedParameters, parameters, setDisplayedParameters, setParameters}: ParamsListProps): JSX.Element {
  const [list, setList] = useState<JSX.Element[] | undefined>();
  
  function deleteParameterFromList(index: number): void {
    const PARAMETER_KEY_FROM_LIST: string = `${index}`;
    delete parameters[PARAMETER_KEY_FROM_LIST];

    const parametersAsArrays: Array<(number | string)[]> = displayedParameters.filter((element: string | number) => { 
      return element !== displayedParameters[index];
    });
    const parametersAsObject: DynamicObjectKeys = Object.fromEntries(parametersAsArrays);    

    setDisplayedParameters(parametersAsArrays);
    setParameters(parametersAsObject)
  };
  
  const createList = (): JSX.Element[] => {    
    return displayedParameters.map((e: any, i: number) => {
      return (
        <div key={i}>
          <div key={e[0]}>{e[0]}</div>
          <div key={`${e[0]}'s_value`}>{e[1]}</div>
          <button onClick={() => {
            deleteParameterFromList(i)         
          }}>-</button>
        </div>
      )
    });
  };
  
  useEffect(() => {
    const newList = createList();
    
    setList(newList);    
  }, [displayedParameters])

  return (
    <>
      {list?.map(( e: JSX.Element ) => { return e })}
    </>
  )
}

export default ParamsList;