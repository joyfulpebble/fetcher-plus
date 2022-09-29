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
  const [parameters, setParameters]     = useState<any>('');
  const [needRedirect, setNeedRedirect] = useState<boolean>(false);

  function handleIsChecked() {    
    setIsChecked(!isChecked);        
  }
  function handleSubmit(values: any) {
    if(values.name && values.url){
      sessionStorage.clear();
      
      let date: string = Tools.getCurrentDate();

      localStorage.setItem(date, JSON.stringify({name: values.name, time: date, url: values.url, params: parameters}));
      sessionStorage.setItem(date, JSON.stringify({url: values.url, params: parameters}));
      
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
              type="text" 
              placeholder='Url...'
            />
          </label>
          <label>
            <span>File name:</span>
            <Input
              innerRef={nameRef}
              type="text" 
              placeholder='Url...'
            />
          </label>
        </form> */}
        <Formik
        initialValues={{ url: "https://jsonplaceholder.typicode.com/posts", name: "s" }}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        <Form id='main'>
          <Field name="url" type="text" as={Input} />
          <Field name="name" type="text" />
        </Form>
      </Formik>
      <form style={{display: 'flex', alignItems: 'center'}}>
        <Switch 
          onChange={handleIsChecked} 
          checked={isChecked} 
        />
        <span style={{marginLeft: 5}}>Need params?</span>
      </form>
      </div>
      <div className={parametersDivClass.join(' ')}>
        <Input
          onChange={(e: any) => setParameters(e.target.value)}
          type={'text'}
          placeholder={'parameter...'}
        />
      </div>
      <SubmitButton
        content={'Submit'}
        type={'submit'}
        form={'main'}
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