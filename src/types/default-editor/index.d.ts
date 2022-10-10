import React from "react";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export interface DefaultEditorProps {
  width: string;
  height: string;
  value: any;
  options?: object;
  setContent: React.Dispatch<any>;
}