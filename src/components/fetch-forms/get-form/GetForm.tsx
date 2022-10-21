import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

import Tools from '../../../tools/Tools';

import classes from './GetForm.module.scss';

import SubmitButton from '../../UI/Buttons/SubmitButton';
import LinkButton from '../../UI/Buttons/LinkButton';
import FormWithToFields from '../../FormWithToFields';
import SwitchDiv from '../../SwitchDiv';

function GetForm(): JSX.Element {  
  const [displayedParametersValues, setDisplayedParametersValues] = useState<any[]>([]);
  const [displayedParametersNames, setDisplayedParametersNames] = useState<any[]>([]);
  const [needParameters, setNeedParameters] = useState<boolean>(false);
  const [needRedirect, setNeedRedirect] = useState<boolean>(false);
  const [parametersUsed, setParametersUsed] = useState<any>({});
  const [storageType, setStorageType] = useState<string>('all');
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
      let date: string = Tools.getCurrentDate();
      Tools.setDataToStorage(storageType, needParameters, values.name, date, values.url, parametersUsed);
      
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
      {
        displayedParameters[0].map((e: any, i: number) => {return ( <div key={i}>{e}</div> )})
      }
      {
        displayedParameters[1].map((e: any, i: number) => {return ( <div key={i}>{e}</div> )})
      }
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