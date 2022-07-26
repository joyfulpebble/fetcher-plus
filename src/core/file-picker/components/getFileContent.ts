import { Type_GetFileContent } from '../../../../types/file-picker.types';
import { readFileSync }        from 'fs';

const getFileContent: Type_GetFileContent = (path: string): string => {
  let fileContent = readFileSync(path, 'utf-8');
  
  return fileContent;
}

export default getFileContent;