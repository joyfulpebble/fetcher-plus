import React from 'react'

function Inset({elements, element, setElement}: any) {
  return (
    <>
      {
        elements.map((e: any) => {
          <button
            onClick={() => setElement(e)}
            key={e}
            className={element === e ? 'page page__current' : 'page'}>{e}</button>
        })
      }
    </>
  )
}

export default Inset