import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

import Tools from '../../core/tools/Tools';

import classes from './GetConfigure.module.scss';

import DefaultEditor from '../../core/editor/DefaultEditor';
import SubmitButton from '../UI/Buttons/SubmitButton';
import LinkButton from '../UI/Buttons/LinkButton';
import Switch from '../UI/Switch/Switch';
import GetForm from './components/GetForm';

function GetConfigure(): JSX.Element {  
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const parametersDivClass: string[] = [classes.ParametersWrapper];
  if(isChecked){
    parametersDivClass.push(classes.active);
  }
  const [parameters, setParameters]     = useState<any>('');
  const [needRedirect, setNeedRedirect] = useState<boolean>(false)

  const urlRef  = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  function handleIsChecked() {    
    setIsChecked(!isChecked);    
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    
    if(urlRef.current?.value && nameRef.current?.value){
      sessionStorage.clear();
      
      let date: string = Tools.getCurrentDate();

      localStorage.setItem(date, JSON.stringify({name: nameRef.current?.value, time: date, url: urlRef.current?.value, params: parameters}));
      sessionStorage.setItem(date, JSON.stringify({url: urlRef.current?.value, params: parameters}));
      
      setNeedRedirect(true);
    } else {
      console.log('err: не все поля заполнены');
    }
  }

  return (
    <div className={classes.SettingsWrapper}>
      <div>
        {/* <form>
          <label>
            <span>Fetch url:</span>
            <Input
              innerRef={urlRef}
              type='text'
              placeholder='Url...'
            />
          </label>
          <label>
            <span>File name:</span>
            <input 
              ref={nameRef}
              type="text" 
              placeholder='Some text...'
            />
          </label>
        </form> */}
        <GetForm/>
        <form style={{display: 'flex', alignItems: 'center'}}>
          <Switch 
            onChange={handleIsChecked} 
            checked={isChecked} 
          />
          <span style={{marginLeft: 5}}>Need params?</span>
        </form>
      </div>
      <div className={parametersDivClass.join(' ')}>
        <DefaultEditor 
          width={'450px'} 
          height={'400px'} 
          value={{ "params": {  } }} 
          options={{tabSize: 2}} 
          setContent={setParameters}
        />
      </div>
      <SubmitButton
        content={'Submit'}
        onClick={handleSubmit}
      />
      <LinkButton
        content={'Go home'}
        path={"/welcome"}
      />
      {needRedirect 
        ? <Navigate 
            to="/workspace"
          /> 
        : <></>}
    </div>
  )
}

export default GetConfigure;