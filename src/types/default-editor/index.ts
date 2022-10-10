import React from "react";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

interface DefaultEditorProps {
  width: number;
  height: number;
  value: any;
  options?: monaco.editor.IDiffEditorConstructionOptions;
  setContent: React.Dispatch<any>;
}

export default DefaultEditorProps; 