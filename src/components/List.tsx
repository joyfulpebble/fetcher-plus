import React from 'react'
import SubmitButton from './UI/Buttons/SubmitButton'

function List({array, elementsType}: any): JSX.Element {
  let updatedArray = null;
  if(elementsType === 'object') {
    updatedArray = array.map((e: any) => {
      let a = Object.keys(e);
      let b = Object.values(e);

      let c =  [...a, ...b]
      return c
    })
    
    console.log(updatedArray);
  }
  
  return (
    updatedArray.map((e: any, i: number) => {
      return (
        <div>
          <div key={e[0]}>{e[0]}</div>
          <div key={e[1]}>{e[1]}</div>
        </div>
      )
    })
  )
}

export default List