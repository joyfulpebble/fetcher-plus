import React, { useEffect, useState } from 'react';
// import SetDataToState from '../components/tools/SetDataToState';

// export default function Fetcher() {

//   const test_params: object = { params: { _limit: 1 } }
//   const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  
//   const [url, setUrl] = useState(test_url);
//   const [params, setParams] = useState(test_params);
  
//   const [content, setContent] = useState();
  
//   const data_from_api = async () => {
//     try{
//       const data: any = await SetDataToState(url, params);
      
//       setContent(data)      
//     }
//     catch(err){
//       console.error(err)
//     }
//   };

//   useEffect(() => {
//     data_from_api()
//   }, [])

//   return content;
// }