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
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const parametersDivClass: string[] = [classes.ParametersWrapper];
  if(isChecked){
    parametersDivClass.push(classes.active);
  }
  const parameters: any = [{_limit: '1', _limitsd: '1sfd', _limitsdsdfs: '1sfdsfsfs', _limitsdsdfssfdf: '1sfdsfsfssf'}];
  const [needRedirect, setNeedRedirect] = useState<boolean>(false);

  function handleIsChecked() {    
    setIsChecked(!isChecked);        
  }
  function handleSubmit(values: any) {
    if(values.name && values.url){
      sessionStorage.clear();
      
      let date: string = Tools.getCurrentDate();

      localStorage.setItem(date, JSON.stringify({name: values.name, time: date, url: values.url, params: Object.fromEntries(parameters)}));
      sessionStorage.setItem(date, JSON.stringify({url: values.url, params: Object.fromEntries(parameters)}));
      
      setNeedRedirect(true);
    } else {
      console.log('err: не все поля заполнены');
    }
  }
  function handleSubmitParams(values: any) {
    parameters.push(Object.values(values))

    console.log(Object.fromEntries(parameters));
  }
  function TransMatrix(A: any)       //На входе двумерный массив
{
    var m = A.length, n = A[0].length, AT: any = [];
    for (var i = 0; i < n; i++)
     { AT[ i ] = [];
       for (var j = 0; j < m; j++) AT[ i ][j] = A[j][ i ];
     }
    return AT;
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
          onChange={handleIsChecked} 
          checked={isChecked} 
        />
        <span style={{marginLeft: 5}}>Need params?</span>
      </div>
      <div className={parametersDivClass.join(' ')}>
      <Formik
        initialValues={{ name: "_limit", value: 1 }}
        onSubmit={(values) => {
        handleSubmitParams(values)
      }}>
        <Form id='data'>
          <label>
            <span>Parameter name:</span>
            <Field name="name" type="text" as={Input} placeholder={'Name...'}/>
          </label>
          <label>
            <span>Parameter value:</span>
            <Field name="value" type="text" as={Input} placeholder={'Value...'}/>
          </label>
        </Form>
      </Formik>
      <div>
        {
          parameters.map((e: any, i: number) => {
            
            console.log(TransMatrix(Object.entries(e)));
            
            // return <li key={i}>{a[i]}</li>
          })
        }
      </div>
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