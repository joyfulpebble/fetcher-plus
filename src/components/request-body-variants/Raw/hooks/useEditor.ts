import { editorCodeColors, editorStyleColors } from "../../../../tools/constants";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux/redux";
import requestBodyRawContentSlice from "../../../../redux/reducers/requestBodyRawContentSlice";

import type { BuiltInParserName, CustomParser, LiteralUnion, Plugin } from "prettier";
import type { OnMount, BeforeMount } from "@monaco-editor/react";

import html from "prettier/parser-html";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";
import { KeyCode, KeyMod } from "monaco-editor";

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

export const useEditor = () => {
	const dispatch = useAppDispatch();
	const { rawType } = useAppSelector((state) => state.requestBodyTypeReducer);
	const { updateRawContent } = requestBodyRawContentSlice.actions;

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

	const editorSetup: BeforeMount = (monaco) => {
		monaco.editor.defineTheme("custom-dark", {
			inherit: true,
			base: "vs-dark",
			colors: editorStyleColors,
			rules: editorCodeColors
		});
		monaco.editor.setTheme("custom-dark");
	};

	return { handleEditorMount, editorSetup };
};
