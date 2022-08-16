import React, { useRef, useState } from 'react';
import classes from './FetchSettings.module.scss'

import DefaultEditor from '../../../core/editor/DefaultEditor';

function FetchSettings({setUrl, setParams, setIsChecked, isChecked}: any): JSX.Element {  

  const [parameters, setParameters] = useState({});
  const [isNeedSave, setIsNeedSave] = useState(false);

  const urlRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(parameters)
    
    setIsNeedSave(true)
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
      <div>
        <DefaultEditor width={'450px'} height={'400px'} value={{ "params": { "_limit": 1} }} options={{tabSize: 2}} setContent={setParameters} isNeedSave={isNeedSave}/>
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default FetchSettings;