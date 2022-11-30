import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

import Tools from '../../../tools/Tools';

import classes from './GetForm.module.scss';

import SubmitButton from '../../UI/Buttons/SubmitButton';
import LinkButton from '../../UI/Buttons/LinkButton';
import FormWithToFields from '../../FormWithToFields';
import SwitchDiv from '../../SwitchDiv';
import List from '../../List';

function GetForm(): JSX.Element {
  const [parameters, setParameters] = useState<any>({});
  // const [displayedParameters, setDisplayedParameters] = useState<any[]>([Object.keys(parameters), Object.values(parameters)])
  const [needParameters, setNeedParameters] = useState<boolean>(false);
  const [needRedirect, setNeedRedirect] = useState<boolean>(false);
  const [storageType, setStorageType] = useState<string>('all');
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
    parameters[values.name] = values.value;
    
    // setDisplayedParameters([Object.keys(parameters), Object.values(parameters)])
  }
  function handleSubmitFetch(values: any) {
    if(values.name && values.url){      
      let date: string = Tools.getCurrentDate();
      Tools.setDataToStorage(storageType, needParameters, values.name, date, values.url, parameters);
      
      setNeedRedirect(true);
    } else {
      console.error('не все поля заполнены');
    }
  }
  // let a = Object.entries(parameters)
  
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
      <SwitchDiv
        needParameters={needParameters}
        handleIsCheckedParameters={handleIsCheckedParameters}
        spanText={'Need parameters?'}/>
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
          formId={'parameters-data'}/>
      {/* {
        a.map((e:any, i:number) => {
          return (
          <div key={i} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 5}}>
            <List key={i+1} array={e}/>
            <SubmitButton key={i+2} content={'del'} onClick={() => {
              delete parameters[`${e[0]}`]
            }}/>
          </div>
            )
        })
      } */}
      <SubmitButton
        content={'Submit params'}
        type={'submit'}
        form={'parameters-data'}/>
      </div>
      <SubmitButton
        content={'Submit'}
        type={'submit'}
        form={'main-request-data'}/>
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