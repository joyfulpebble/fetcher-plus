import React from 'react';

function Inset({elements, element, setElement}: any) {
  return (
    <>
      {
        elements.map((e: any) => {
          <button
            onClick={() => setElement(e)}
            key={e}
            className={element === e ? 'element element__current' : 'element'}>{e}</button>
        })
      }
    </>
  )
}

export default Inset;