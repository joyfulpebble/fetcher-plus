import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Field, Form } from "formik";

import Tools from '../../../core/tools/Tools';

import classes from './GetForm.module.scss';

import SubmitButton from '../../UI/Buttons/SubmitButton';
import LinkButton from '../../UI/Buttons/LinkButton';
import Switch from '../../UI/Switch/Switch';
import Input from '../../UI/Input/Input';
import FormWithToFields from '../../FormWithToFields';

function GetForm(): JSX.Element {  
  const [displayedParametersValues, setDisplayedParametersValues] = useState<any[]>([]);
  const [displayedParametersNames, setDisplayedParametersNames] = useState<any[]>([]);
  const [needParameters, setNeedParameters] = useState<boolean>(false);
  const [needRedirect, setNeedRedirect] = useState<boolean>(false);
  const [parametersUsed, setParametersUsed] = useState<any>({});
  const displayedParameters: Array<any[]> = [displayedParametersNames, displayedParametersValues]

  const displayedParameterNameRef = useRef<HTMLInputElement>(null);
  const displayedParameterValueRef = useRef<HTMLInputElement>(null);

  const parametersDivClass: string[] = [classes.ParametersWrapper];
  if(needParameters){
    parametersDivClass.push(classes.active);
  }

  function handleIsCheckedParameters(): void {    
    setNeedParameters(!needParameters);        
  }
  function handleSubmitParams(values: any) {
    parametersUsed[values.name] = values.value;
    
    setDisplayedParametersNames([...displayedParametersNames, displayedParameterNameRef.current?.value]);
    setDisplayedParametersValues([...displayedParametersValues, displayedParameterValueRef.current?.value]);
  }
  function handleSubmitFetch(values: any) {
    if(values.name && values.url){
      sessionStorage.clear();
      
      let date: string = Tools.getCurrentDate();

      needParameters 
        ? Tools.setDataToStorages(values.name, date, values.url, parametersUsed)
        : Tools.setDataToStorages(values.name, date, values.url)
      
      setNeedRedirect(true);
    } else {
      console.error('не все поля заполнены');
    }
  }
  
  return (
    <div className={classes.SettingsWrapper}>
      <FormWithToFields
          firstInitValueName={'url'}
          secondInitValueName={'name'}
          firstInitValue={'https://jsonplaceholder.typicode.com/posts'}
          secondInitValue={'asd'}
          firstInfoText={'Fetch url:'}
          secondInfoText={'File name:'}
          onSubmitFuncton={handleSubmitFetch}
          formId={'main-request-data'}/>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Switch 
          onChange={handleIsCheckedParameters} 
          checked={needParameters} 
        />
        <span style={{marginLeft: 5}}>Need params?</span>
      </div>
      <div className={parametersDivClass.join(' ')}>
        <FormWithToFields
          firstInitValueName={'name'}
          secondInitValueName={'value'}
          firstInitValue={'_limit'}
          secondInitValue={1}
          firstInfoText={'Parameter name:'}
          secondInfoText={'Parameter value:'}
          firstRef={displayedParameterNameRef}
          secondRef={displayedParameterValueRef}
          onSubmitFuncton={handleSubmitParams}
          formId={'data'}/>
      {
        displayedParameters[0].map((e: any, i: number) => {return ( <div key={i}>{e}</div> )})
      }
      {
        displayedParameters[1].map((e: any, i: number) => {return ( <div key={i}>{e}</div> )})
      }
      </div>
      <SubmitButton
        content={'Submit'}
        type={'submit'}
        form={'main-request-data'}/>
      <SubmitButton
        content={'Submit params'}
        type={'submit'}
        form={'data'}/>
      <LinkButton
        content={'Go home'}
        path={"/welcome"}/>
      {needRedirect 
        ? <Navigate 
            to="/workspace"/> 
        : <></>}
    </div>
  )
}

export default GetForm;