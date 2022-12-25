import React, { useEffect, useState } from 'react';

import { ParamsListProps } from '../types/elements';
import { DynamicObjectKeys } from '../types/simple_models';

function ParamsList({displayedParameters, parameters, setDisplayedParameters, setParameters}: ParamsListProps): JSX.Element {
  const [list, setList] = useState<JSX.Element[] | undefined>();
  const newDisplayedParameters: (number | string)[][] = displayedParameters;
  
  const deleteParameterFromList = (index: number): void => {
    const PARAMETER_KEY_FROM_LIST: string = `${index}`;
    delete parameters[PARAMETER_KEY_FROM_LIST];

    const parametersAsArrays: (number | string)[][] = displayedParameters.filter((e: string | number) => { return e !== displayedParameters[index] });
    const parametersAsObjects: DynamicObjectKeys[] = parametersAsArrays.map((e: any) => { return e.reduce((a:any, v:any) => ({ ...a, [e[0]]: v}), {}) });    
    let objectWithoutIndexElement: DynamicObjectKeys = {};    
    
    for (let i = 0; i < parametersAsObjects.length; i++) {
      objectWithoutIndexElement = Object.assign({}, objectWithoutIndexElement, parametersAsObjects[i]);      
    }
    
    setDisplayedParameters(parametersAsArrays);
    setParameters(Object.assign({}, objectWithoutIndexElement))
  };
  
  const createList = (): JSX.Element[] => {    
    return newDisplayedParameters.map((e: any, i: number) => {
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