import React, { useState, useEffect, useRef, FC } from 'react';

import Editor from "@monaco-editor/react";
import files from "./files";

function DefualtEditor() {

  const editorRef = useRef(null);
  const [fileName, setFileName] = useState("script.js");

  const file = files[fileName];
  
  useEffect(() => {
    editorRef.current?.focus();
    console.log(file.name);
  }, [file.name]);

  return (
    <div>
      <button
        disabled={fileName === "script.js"}
        onClick={() => setFileName("script.js")}
      >
        script.js
      </button>
      <button
        disabled={fileName === "style.css"}
        onClick={() => setFileName("style.css")}
      >
        style.css
      </button>
      <button
        disabled={fileName === "index.html"}
        onClick={() => setFileName("index.html")}
      >
        index.html
      </button>
      <Editor
        height="80vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onMount={(editor) => (editorRef.current = editor)}
      />
    </div>
  )
}

export default DefualtEditor;