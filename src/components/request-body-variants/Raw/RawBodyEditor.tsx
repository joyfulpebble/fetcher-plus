import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestBodyRawContentSlice from "../../../redux/reducers/requestBodyRawContentSlice";

import Editor, { BeforeMount, OnMount } from "@monaco-editor/react";
import { KeyCode, KeyMod } from "monaco-editor";

import prettier from "prettier/standalone";
import html from "prettier/parser-html";
import babel from "prettier/parser-babel";
import type { BuiltInParserName, CustomParser, LiteralUnion, Plugin } from "prettier";

import { editorCodeColors, editorStyleColors } from "../../../tools/constants";

/** TODO:
 * - Декомпозиция
 */

type PrettierModesT = {
	html: {
		plugins: (string | Plugin<any>)[] | undefined;
		parser: LiteralUnion<BuiltInParserName, string> | CustomParser | undefined;
	};
	javascript: {
		plugins: (string | Plugin<any>)[] | undefined;
		parser: LiteralUnion<BuiltInParserName, string> | CustomParser | undefined;
	};
	json: {
		plugins: (string | Plugin<any>)[] | undefined;
		parser: LiteralUnion<BuiltInParserName, string> | CustomParser | undefined;
	};
};

const RawBodyEditor = () => {
	const dispatch = useAppDispatch();
	const storageRawContent = useAppSelector((state) => state.requestBodyRawContentReducer);
	const { rawType } = useAppSelector((state) => state.requestBodyTypeReducer);
	const { updateRawContent } = requestBodyRawContentSlice.actions;

	const editorSetup: BeforeMount = (monaco) => {
		monaco.editor.defineTheme("custom-dark", {
			inherit: true,
			base: "vs-dark",
			colors: editorStyleColors,
			rules: editorCodeColors
		});
		monaco.editor.setTheme("custom-dark");
	};
	const handleEditorMount: OnMount = (editor) => {
		editor.addAction({
			id: "cmdpaletteoff",
			label: "cmdpaletteoff",
			keybindings: [KeyCode.F1],
			run: () => {}
		});

		editor.addAction({
			id: "CP",
			label: "Code prettify",
			keybindings: [KeyMod.CtrlCmd | KeyCode.KeyS],
			run: () => {
				const prettierModes: PrettierModesT = {
					html: {
						plugins: [html],
						parser: "html"
					},
					javascript: {
						plugins: [babel],
						parser: "babel"
					},
					json: {
						plugins: [babel],
						parser: "json"
					}
				};

				const prettifyed = prettier.format(editor.getValue(), {
					parser: prettierModes[rawType.toLowerCase() as keyof PrettierModesT].parser,
					plugins: prettierModes[rawType.toLowerCase() as keyof PrettierModesT].plugins,
					printWidth: 100,
					tabWidth: 2,
					useTabs: false,
					semi: true,
					singleQuote: false,
					quoteProps: "consistent",
					jsxSingleQuote: false,
					trailingComma: "none",
					bracketSpacing: true,
					bracketSameLine: false,
					arrowParens: "always",
					endOfLine: "lf",
					singleAttributePerLine: true
				});

				editor.setValue(prettifyed);
				dispatch(updateRawContent(prettifyed));
			}
		});
	};

	return (
		<div
			style={{
				border: "1px solid #eeffff10",
				borderTop: "none",
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

export default RawBodyEditor;
