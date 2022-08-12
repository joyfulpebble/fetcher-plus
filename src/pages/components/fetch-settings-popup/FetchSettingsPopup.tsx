import React, { useRef } from 'react';

function Popup({setUrl, setVisible}: any): JSX.Element {  

  const urlRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();

    setUrl(urlRef.current?.value);
    setVisible(false)
  }

  return (
    <div>
      <div>
        <form>
          <input 
            ref={urlRef}
            type="text" 
            placeholder='Введите url...'
          />
          <button onClick={handleSubmit}>go</button>
        </form>
      </div>

    </div>
  )
}

export default Popup;