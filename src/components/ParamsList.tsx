import { createFileList } from '@testing-library/user-event/dist/types/utils';
import React, { useEffect, useState } from 'react'
import SubmitButton from './UI/Buttons/SubmitButton'

function ParamsList({matrix}: any): JSX.Element {
  const [listContent, setListContent] = useState<Element>();
  let /*[*/parametersMatrix/*, setParametersMatrix] = useState(*/=matrix/*);*/

  function deleteParameterFromList(index: number) {
    const newMatrix = matrix.filter((e: string | number) => { return e !== matrix[index] });
    
    parametersMatrix = newMatrix// setParametersMatrix(newMatrix)
    setListContent(newMatrix)
      
    console.log(parametersMatrix);
  }
  
  function createList(): Element{
    const result: Element = parametersMatrix.map((e: any, i: number) => {
      return (
        <div key={i}>
          <div key={e[0]}>{e[0]}</div>
          <div key={e[1]}>{e[1]}</div>
          <button onClick={() => {
            deleteParameterFromList(i)         
          }}>-</button>
        </div>
      )
    })

    return result;
  }

  useEffect(() => {
    const newList = createList()

    setListContent(newList);
    console.log(newList);
    
  }, [parametersMatrix])

  return (
    <>
      {listContent}
    </>
  )
}

export default ParamsList;