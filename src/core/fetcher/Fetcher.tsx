import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../components/API/Service';
import FortmatToString from '../components/tools/FortmatToString';


export async function fetch() {
  // setContent(FortmatToString(await Service.getContent(url, param)));
  console.log('work');
  
}

export default function Fetcher() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
  const [param, setParam] = useState({ params: { _limit: 1 } });
  
  const [content, setContent] = useState('');
  const [saveContent, setSaveContent] = useState(content);

  const navigate = useNavigate();

  return (
    <div>
      Fetcher
      <br />
      <button onClick={ async event => { navigate(`/edit`); } }>edit</button>
    </div>
  )
}