import React, { useRef, useState } from 'react';
import classes from './FetchSettings.module.scss'

import ParamItem from '../UI/ParamItem';
import AddParamBtn from '../UI/AddParamBtn';

function FetchSettings({setUrl, setIsChecked, isChecked}: any): JSX.Element {  

  const [paramsList, setParamsList] = useState< Array< JSX.Element > >([<ParamItem/>])

  const classesParamsList: Array<string> =[classes.ParamsList];
  if(isChecked){
    classesParamsList.push(classes.active);
  }

  const urlRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();

    setUrl(urlRef.current?.value);
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
      <div className={classesParamsList.join(',')}>
        <AddParamBtn setParamsList={setParamsList} paramsList={paramsList}/>
        {paramsList
          .map((element, index) => {
            return(
              <li key={index}>{element}</li>
            )
          })
        }
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default FetchSettings;