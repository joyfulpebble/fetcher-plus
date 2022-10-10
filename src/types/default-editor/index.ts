import React from "react";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

interface DefaultEditorProps {
  width: string;
  height: string;
  value: any;
  options?: object;
  setContent: React.Dispatch<any>;
}

export default DefaultEditorProps; 