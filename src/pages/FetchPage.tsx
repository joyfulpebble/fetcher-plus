import React, { useEffect } from 'react';

import Form from '../components/FetchForm';
import StatusBar from '../components/layouts/statusbar/StatusBar';

import { useAppDispatch } from '../hooks/redux/redux';
import { requestErrorSlice } from '../redux/reducers/requestErrorSlice';

function FetchForm() {
  const { clearErrorStorage } = requestErrorSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch( clearErrorStorage() )
  }, [])

  return (
    <div>
      <Form/>
      <StatusBar/>
    </div>
  )
}

export default FetchForm