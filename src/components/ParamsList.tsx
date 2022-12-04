import React, { useEffect, useState } from 'react'
import SubmitButton from './UI/Buttons/SubmitButton'

function List({array, elementsType}: any): JSX.Element {
  function arrFunc() {
    let updatedArray: (string | number)[] = array.map((e: any) => {
      let objectKeys: string[] = Object.keys(e);
      let objectValues: (string | number)[] = Object.values(e);
      
      const result =  [...objectKeys, ...objectValues];
      return result;
    })
    return updatedArray;
  }
  
  const func = arrFunc()
  const [listContent, setListContent] = useState(func);
  
  function secFunc(func: (string | number)[], index: number) {
    let newArr = func.splice(index, 1);

    console.log(func);
    return func
  }
  const a: any = func.map((e: any, i: number) => {
    return (
      <div key={i}>
        <div key={e[0]}>{e[0]}</div>
        <div key={e[1]}>{e[1]}</div>
        <button onClick={() => {
          let newArr = secFunc(func, i)
          setListContent(newArr)
        }}>-</button>
      </div>
    )
  })
  
  useEffect(() => {
    
    setListContent(a);

  }, [array])
   
  return (
    <>
      {listContent}
    </>
  )
}

export default List;