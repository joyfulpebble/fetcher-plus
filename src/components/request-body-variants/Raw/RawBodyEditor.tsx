import { tags as t } from "@lezer/highlight";
import createTheme from "@uiw/codemirror-themes";

import { xml } from "@codemirror/lang-xml";
import { html } from "@codemirror/lang-html";
import { json } from "@codemirror/lang-json";
import { esLint, javascript } from "@codemirror/lang-javascript";
import { linter } from "@codemirror/lint";

import ReactCodeMirror from "@uiw/react-codemirror";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestBodyRawContentSlice from "../../../redux/reducers/requestBodyRawContentSlice";

/** TODO:
 * - Найти/настроить линтеры
 * - Отредактировать тему
 * - Реализовать смену языка
 * - Оптимизировать обновление `content storage`
 */

const RawBodyEditor = () => {
	const customTheme = createTheme({
		theme: "dark",
		settings: {
			background: "#1e1e1e",
			foreground: "#9cdcfe",
			caret: "#c6c6c6",
			selection: "#6199ff2f",
			selectionMatch: "#72a1ff59",
			lineHighlight: "#ffffff0f",
			gutterBackground: "#1e1e1e",
			gutterForeground: "#838383",
			gutterActiveForeground: "#fff",
			fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace'
		},
		styles: [
			{
				tag: [
					t.keyword,
					t.operatorKeyword,
					t.modifier,
					t.color,
					t.constant(t.name),
					t.standard(t.name),
					t.standard(t.tagName),
					t.special(t.brace),
					t.atom,
					t.bool,
					t.special(t.variableName)
				],
				color: "#569cd6"
			},
			{
				tag: [t.controlKeyword, t.moduleKeyword],
				color: "#c586c0"
			},
			{
				tag: [
					t.name,
					t.deleted,
					t.character,
					t.macroName,
					t.propertyName,
					t.variableName,
					t.labelName,
					t.definition(t.name)
				],
				color: "#9cdcfe"
			},
			{ tag: t.heading, fontWeight: "bold", color: "#9cdcfe" },
			{
				tag: [
					t.typeName,
					t.className,
					t.tagName,
					t.number,
					t.changed,
					t.annotation,
					t.self,
					t.namespace
				],
				color: "#4ec9b0"
			},
			{
				tag: [t.function(t.variableName), t.function(t.propertyName)],
				color: "#dcdcaa"
			},
			{ tag: [t.number], color: "#b5cea8" },
			{
				tag: [t.operator, t.punctuation, t.separator, t.url, t.escape, t.regexp],
				color: "#d4d4d4"
			},
			{
				tag: [t.regexp],
				color: "#d16969"
			},
			{
				tag: [t.special(t.string), t.processingInstruction, t.string, t.inserted],
				color: "#ce9178"
			},
			{ tag: [t.angleBracket], color: "#808080" },
			{ tag: t.strong, fontWeight: "bold" },
			{ tag: t.emphasis, fontStyle: "italic" },
			{ tag: t.strikethrough, textDecoration: "line-through" },
			{ tag: [t.meta, t.comment], color: "#6a9955" },
			{ tag: t.link, color: "#6a9955", textDecoration: "underline" },
			{ tag: t.invalid, color: "#ff0000" }
		]
	});

	const dispatch = useAppDispatch();
	const storageContent = useAppSelector((state) => state.requestBodyRawContentReducer);
	const { updateRawContent } = requestBodyRawContentSlice.actions;

	return (
		<>
			<ReactCodeMirror
				onChange={(value) => {
					dispatch(updateRawContent(value));
				}}
				value={storageContent}
				height="200px"
				theme={customTheme}
				extensions={[json() /*xml(), , html(), javascript()*/]}
				basicSetup={{
					foldGutter: false,
					dropCursor: false,
					allowMultipleSelections: false,
					indentOnInput: false
				}}
			/>
		</>
	);
};

export default RawBodyEditor;