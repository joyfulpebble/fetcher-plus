import React from 'react'
import SubmitButton from './UI/Buttons/SubmitButton'

function List({array, elementsType}: any): JSX.Element {
  let updatedArray = null;
  if(elementsType === 'object') {
    updatedArray = array.map((e: any) => {
      let objectKeys = Object.keys(e);
      let objectValues = Object.values(e);

      const result =  [...objectKeys, ...objectValues];
      return result
    })
  }
  
  return (
    updatedArray.map((e: any, i: number) => {
      return (
        <div key={i}>
          <div key={e[0]}>{e[0]}</div>
          <div key={e[1]}>{e[1]}</div>
        </div>
      )
    })
  )
}

export default List;