import React from 'react'

function ParamItem():JSX.Element {
  return (
    <div>
      <form>
          <label>
            <span>Fetch param: </span>
            <input 
              type="text" 
              placeholder='Param...'
            />
          </label>
        </form>
    </div>
  )
}

export default ParamItem;