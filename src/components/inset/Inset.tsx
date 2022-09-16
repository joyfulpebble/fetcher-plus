import React from 'react';

function Inset({elements, element, setElement}: any) {
  return (
    <>
      {
        elements.map((e: any, i: number) => {
          return (
          <button
            onClick={() => {
              setElement(i)}}
            key={i}
          >{e}</button>
          )
        })
      }
    </>
  )
}

export default Inset;