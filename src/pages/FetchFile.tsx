import React from 'react';
import Service from '../core/components/API/Service';

function PickFilePopup(): any {
  const TEST_FETCH_URL = "https://jsonplaceholder.typicode.com/posts";
  const TEST_FETCH_PARAMS = { 
    params: {
    _limit: 10
  }}

  async function a() {
    return await Service.getFile(TEST_FETCH_URL, TEST_FETCH_PARAMS)
  }

  a()

  return (
    <div>
      test
    </div>
  );
}

export default PickFilePopup