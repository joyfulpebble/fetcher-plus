import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../components/API/Service';
import FortmatToString from '../components/tools/FortmatToString';



export default function Fetcher() {
  // const navigate = useNavigate();

  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
  const [param, setParam] = useState({ params: { _limit: 1 } });
  
  const [content, setContent] = useState('');
  
  async function fetch() {
    setContent(FortmatToString(await Service.getContent(url, param)));
  }

  return (
    <div>
      <button onClick={ async event => { 
        // navigate(`/edit`)
        fetch()
        } }>edit</button>
    </div>
  )
}