import React from 'react'
import ParamItem from './ParamItem'

function AddParamBtn({setParamsList, paramsList}: any):JSX.Element {
  return (
    <button onClick={() => {
    setParamsList([...paramsList, <ParamItem/>]);
    }}>+</button>
  )
}

export default AddParamBtn;