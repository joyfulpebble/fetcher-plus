import React from 'react'
import SubmitButton from './UI/Buttons/SubmitButton'

function List({array}: any): JSX.Element {
  
  return (
    array.map((e: any, i: number) => {
      return (
        <div key={i}>{e}</div>
      )
    })
  )
}

export default List