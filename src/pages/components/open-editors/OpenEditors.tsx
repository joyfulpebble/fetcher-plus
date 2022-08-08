import React from 'react'

function OpenEditors({pages, page, setPage}: any) {
  return (
    <div>
      {
          pages.map((p: any, index: number) =>
            <button
              onClick={() => {
                setPage(index)
              }}
              key={p}>{p}</button>
          )}
    </div>
  )
}

export default OpenEditors