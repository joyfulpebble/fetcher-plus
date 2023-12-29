import { useEditor } from "./hooks/useEditor";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";

import requestBodyRawContentSlice from "../../../redux/reducers/requestBodyRawContentSlice";

import Editor from "@monaco-editor/react";

interface CustomEditorProps {
	className?: string;
	style?: React.CSSProperties;
}

const CustomEditor = ({ className, style }: CustomEditorProps) => {
	const dispatch = useAppDispatch();
	const storageRawContent = useAppSelector((state) => state.requestBodyRawContentReducer);
	const { rawType } = useAppSelector((state) => state.requestBodyTypeReducer);
	const { updateRawContent } = requestBodyRawContentSlice.actions;

	const { handleEditorMount, editorSetup } = useEditor();

	return (
		<div
			className={className}
			style={{
				...style,
				border: "1px solid #eeffff10",
				height: "100%"
			}}
		>
			<Editor
				value={storageRawContent}
				height={"100%"}
				width={"100%"}
				theme="custom-dark"
				language={rawType.toLocaleLowerCase()}
				onChange={(value) => {
					if (value && storageRawContent !== value) {
						dispatch(updateRawContent(value));
					}
				}}
				onMount={handleEditorMount}
				beforeMount={editorSetup}
				options={{
					cursorStyle: "line-thin",
					cursorBlinking: "smooth",
					minimap: { enabled: false },
					scrollbar: {
						vertical: "visible"
					},
					smoothScrolling: true,
					find: { autoFindInSelection: "multiline", addExtraSpaceOnTop: false },
					contextmenu: false,
					fixedOverflowWidgets: true,
					hover: { enabled: false },
					links: false,
					formatOnPaste: true,
					formatOnType: true,
					autoIndent: "full",
					autoClosingBrackets: "always"
				}}
			/>
		</div>
	);
};

export default CustomEditor;
