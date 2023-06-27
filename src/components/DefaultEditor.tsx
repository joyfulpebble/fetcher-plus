import Editor from "@monaco-editor/react";

import { DefaultEditorProps } from "../types/elements";

function DefaultEditor({
	EditorWidth,
	EditorHeight,
	EditorInitValue,
	EditorConfig,
	ContentToSaveFunc
}: DefaultEditorProps): JSX.Element {
	return (
		<div>
			<Editor
				width={EditorWidth}
				height={EditorHeight}
				theme="vs-dark"
				defaultLanguage="json"
				value={JSON.stringify(EditorInitValue, null, "  ")}
				onChange={(element) => {
					ContentToSaveFunc(JSON.parse(element!));
				}}
				options={{
					...EditorConfig,
					fontLigatures: true,
					fontFamily: "'Consolas', 'Courier New', monospace",
					fontSize: 14
				}}
			/>
		</div>
	);
}

export default DefaultEditor;
