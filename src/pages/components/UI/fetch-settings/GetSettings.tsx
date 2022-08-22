import React, { useRef, useState } from 'react';
import classes from './GetSettings.module.scss'

import DefaultEditor from '../../../../core/editor/DefaultEditor';

function GetSettings({setUrl, setParams, setIsChecked, isChecked}: any): JSX.Element {  

  const parametersDivClass = [classes.ParametersWrapper];
  if(isChecked){
    parametersDivClass.push(classes.active)
  }
  const [parameters, setParameters] = useState('');

  const urlRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    
    setUrl(urlRef.current?.value);
    setParams(parameters)
  }

  return (
    <div className={classes.SettingsWrapper}>
      <div>
        <form>
          <label>
            <span>Fetch url:</span>
            <input 
              ref={urlRef}
              type="text" 
              placeholder='Url...'
            />
          </label>
        </form>
        <form>
          <label>
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span>Add params.</span>
          </label>
        </form>
      </div>
      <div className={parametersDivClass.join(' ')}>
        <DefaultEditor 
        width={'450px'} 
        height={'400px'} 
        value={{ "params": {  } }} 
        options={{tabSize: 2}} 
        setContent={setParameters}/>
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default GetSettings;