import React from 'react'

function OpenEditors({pages, page, setPage}: any) {
  return (
    <div>
      {
          pages.map((p: any, index: number) =>
            <button
              onClick={() => {
                setPage(index)
                // console.log(index+1);
                
              }}
              key={p}
              className={page === p ? 'page page__current' : 'page'}>{p}</button>
          )}
    </div>
  )
}

export default OpenEditors