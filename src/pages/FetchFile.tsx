import React, { useEffect, useState } from 'react';
import Service from '../components/API/Service';

function PickFilePopup(): any {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const PARAMS = { 
    params: {
    _limit: 10
  }}
  // ###

  const [fileContent, setFileContent] = useState({});

  async function fetchFile() {
    setFileContent(await Service.getFile(URL, PARAMS));
  }

  console.log(fileContent);
  
  return (
    <div>
      <button onClick={fetchFile}>fetch!</button>
      <a href="http://localhost:3000/home">Go home</a>
    </div>
  );
}

export default PickFilePopup