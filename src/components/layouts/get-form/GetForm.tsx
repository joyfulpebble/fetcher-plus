import { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { getConfigSlice } from '../../../redux/reducers/getConfigSlice';
import { useAppDispatch } from '../../../hooks/redux/redux';

import { Entries } from 'type-fest';
import { 
  DynamicObjectKeys, 
  MainInfoOfRequestFromFields, 
  InfoOfParamsFromFields 
  } from '../../../types/simple_models/index';

import CustomButton from '../../UI/Buttons/PrimaryButton';
import LinkButton from '../../UI/Buttons/RedirectButton';
import FormWithToFields from '../../FormWithToFields';
import Switch from '../../UI/Switch/Switch';
import ParamsList from '../../ParamsList';

import classes from './GetForm.module.scss';
import { idb_set } from '../../../tools/idb-tools/idbMethods';
import { request_history_db } from '../../../hooks/idb/request-history-db';

function GetForm(): JSX.Element {
  const [parameters, setParameters] = useState<DynamicObjectKeys>({});
  const [displayedParameters, setDisplayedParameters] = useState<Entries<typeof parameters>>([])
  
  const [needParameters, setNeedParameters] = useState<boolean>(false);
  const [needRedirect, setNeedRedirect] = useState<boolean>(false);
  
  const displayedParameterNameRef = useRef<HTMLInputElement>(null);
  const displayedParameterValueRef = useRef<HTMLInputElement>(null);
  
  const { updateConfig } = getConfigSlice.actions;
  const dispatch = useAppDispatch();

  const handleSubmitParams = (values: InfoOfParamsFromFields): void => {
    parameters[values.parameter_name] = values.parameter_value;
    
    const parametersMatrix = Object.entries(parameters);
    setDisplayedParameters(parametersMatrix)
  };
  
  const handleSubmitFetch = (values: MainInfoOfRequestFromFields): void => {
    if(!values.request_name && values.request_url) return console.error('не все поля заполнены');  
    
    const date: string = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
    const requestHistoryItem = {
      date: date,
      url: values.request_url, 
      parameters: parameters ? parameters : {}
    }
    
    
    idb_set(values.request_name, requestHistoryItem, request_history_db, 'history');  
    dispatch(
      updateConfig(
        {
          params: parameters,
          url: values.request_url,
          request_name: values.request_name
        }
      )
    );
    setNeedRedirect(true);
  };

  return (
    <div className={classes.SettingsWrapper}>
      <FormWithToFields
          firstInitValueName={'request_url'}
          secondInitValueName={'request_name'}
          firstInitValue={'https://jsonplaceholder.typicode.com/posts'}
          secondInitValue={'asd'}
          firstInfoText={'Fetch url:'}
          secondInfoText={'File name:'}
          onSubmitFuncton={handleSubmitFetch}
          formId={'main-request-data'}
      />
      <Switch
        needParameters={needParameters}
        spanText={'Need parameters?'}
        handleIsCheckedParameters={() => {
          setNeedParameters(!needParameters);  
        }}
      />
      <div className={`${classes.ParametersWrapper} ${needParameters ? classes.active : ''}`}>
        <FormWithToFields
          firstInitValueName={'parameter_name'}
          secondInitValueName={'parameter_value'}
          firstInitValue={'_limit'}
          secondInitValue={1}
          firstInfoText={'Parameter name:'}
          secondInfoText={'Parameter value:'}
          firstRef={displayedParameterNameRef}
          secondRef={displayedParameterValueRef}
          onSubmitFuncton={handleSubmitParams}
          formId={'parameters-data'}
        />
        <CustomButton
          children={'Submit params'}
          type={'submit'}
          form={'parameters-data'}
        />
        <ParamsList 
          displayedParameters={displayedParameters}
          setDisplayedParameters={setDisplayedParameters}
          parameters={parameters}
          setParameters={setParameters}
        />
      </div>
      <CustomButton
        children={'Submit'}
        type={'submit'}
        form={'main-request-data'}
      />
      <LinkButton
        content={'Go home'}
        path={"/welcome"}
      />
      {
        needRedirect 
          ? 
            <Navigate to="/workspace"/> 
          : <></>
      }      
    </div>
  )
}

export default GetForm;