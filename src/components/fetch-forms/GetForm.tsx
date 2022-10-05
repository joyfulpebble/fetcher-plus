import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Field, Form } from "formik";

import Tools from '../../core/tools/Tools';

import classes from './GetForm.module.scss';

import SubmitButton from '../UI/Buttons/SubmitButton';
import LinkButton from '../UI/Buttons/LinkButton';
import Switch from '../UI/Switch/Switch';
import Input from '../UI/Input/Input';

function GetForm(): JSX.Element {  
  const [needParameters, setNeedParameters] = useState<boolean>(false);

  const parametersDivClass: string[] = [classes.ParametersWrapper];
  if(needParameters){
    parametersDivClass.push(classes.active);
  }
  const [parametersUsed, setParametersUsed] = useState<any>({});
  const [displayedParametersNames, setDisplayedParametersNames] = useState<any[]>([]);
  const [displayedParametersValues, setDisplayedParametersValues] = useState<any[]>([]);
  const displayedParameters: Array<any[]> = [displayedParametersNames, displayedParametersValues]

  const displayedParameterNameref = useRef<HTMLInputElement>(null);
  const displayedParameterValueref = useRef<HTMLInputElement>(null);

  const [needRedirect, setNeedRedirect] = useState<boolean>(false);

  function handleIsCheckedParameters() {    
    setNeedParameters(!needParameters);        
  }
  function setDataToStorages(fetchCfgName: string | number, creationDate: string, fetchUrl: string, fetchParameters?: object): void {
    localStorage.setItem(creationDate, JSON.stringify({name: fetchCfgName, time: creationDate, url: fetchUrl, params: fetchParameters ? fetchParameters : {}}))
    sessionStorage.setItem(creationDate, JSON.stringify({url: fetchUrl, params: fetchParameters ? fetchParameters : {}}))
  }
  function handleSubmit(values: any) {
    if(values.name && values.url){
      sessionStorage.clear();
      
      let date: string = Tools.getCurrentDate();

      needParameters 
        ? setDataToStorages(values.name, date, values.url, parametersUsed)
        : setDataToStorages(values.name, date, values.url)
      
      setNeedRedirect(true);
    } else {
      console.log('err: не все поля заполнены');
    }
  }
  function handleSubmitParams(values: any) {
    parametersUsed[values.name] = values.value;
    setDisplayedParametersNames([...displayedParametersNames, displayedParameterNameref.current?.value]);
    setDisplayedParametersValues([...displayedParametersValues, displayedParameterValueref.current?.value]);

    console.log(parametersUsed);
    console.log([displayedParametersNames, displayedParametersValues]);
  }
  
  return (
    <div className={classes.SettingsWrapper}>
      <Formik
        initialValues={{ url: "https://jsonplaceholder.typicode.com/posts", name: "s" }}
        onSubmit={(values) => {
        handleSubmit(values)
      }}>
        <Form id='main-request-data'>
          <label>
            <span>Fetch url:</span>
            <Field name="url" type="text" as={Input} placeholder={'Url...'}/>
          </label>
          <label>
            <span>File name:</span>
            <Field name="name" type="text" as={Input} placeholder={'Name...'}/>
          </label>
        </Form>
      </Formik>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Switch 
          onChange={handleIsCheckedParameters} 
          checked={needParameters} 
        />
        <span style={{marginLeft: 5}}>Need params?</span>
      </div>
      <div className={parametersDivClass.join(' ')}>
      <Formik
        initialValues={{name: '_limit', value: 1}}
        onSubmit={(values) => {
        handleSubmitParams(values)
      }}>
        <Form id='data'>
          <label>
            <span>Parameter name:</span>
            <Field name="name" type="text" innerRef={displayedParameterValueref} as={Input} placeholder={'Name...'}/>
          </label>
          <label>
            <span>Parameter value:</span>
            <Field name="value" type="text" innerRef={displayedParameterNameref} as={Input} placeholder={'Value...'}/>
          </label>
        </Form>
      </Formik>
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
        form={'main-request-data'}
      />
      <SubmitButton
        content={'Submit params'}
        type={'submit'}
        form={'data'}
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

export default GetForm;