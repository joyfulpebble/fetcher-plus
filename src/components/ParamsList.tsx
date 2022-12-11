import React, { useEffect, useState } from 'react'
import SubmitButton from './UI/Buttons/SubmitButton'

function ParamsList({disParameters, setParameters, a, parameters}: any): JSX.Element {
  const [listContent, setListContent] = useState<Element>();
  let updatedMatrix = disParameters;
  let d;
  
  function deleteParameterFromList(index: number) {
    const newMatrix = disParameters.filter((e: string | number) => { return e !== disParameters[index] });
    updatedMatrix = newMatrix
    
    setListContent(newMatrix);
    setParameters(newMatrix);

    let c = updatedMatrix.map((e: any) => { return e.reduce((a:any, v:any) => ({ ...a, [e[0]]: v}), {}) });
    let b: any = {};

    for (let i = 0; i < c.length; i++) {
      b = Object.assign({}, b, c[i])
    }
  
    let bn = `${index}`
    let afdsfdfa: any = delete parameters[bn]
    
    a(Object.assign({}, b, afdsfdfa))
  }
  
  function createList(): Element{
    const result: Element = updatedMatrix.map((e: any, i: number) => {
      return (
        <div key={i}>
          <div key={e[0]}>{e[0]}</div>
          <div key={`${e[0]}'s_value`}>{e[1]}</div>
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
  }, [disParameters])

  return (
    <>
      {listContent}
    </>
  )
}

export default ParamsList;