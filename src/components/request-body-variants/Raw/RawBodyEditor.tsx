import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestBodyRawContentSlice from "../../../redux/reducers/requestBodyRawContentSlice";

import Editor, { OnMount, BeforeMount } from "@monaco-editor/react";

/** TODO:
 * ✓ Найти/настроить линтеры
 * - Настроить сам редактор
 * * - Изменить контекстное меню
 * * - Убрать лишние бинды
 * * * ✓ Настроить поиск
 * * ✓ Убрать минимапу
 * ✓ Отредактировать тему
 * * - Сделать стили для разных языков
 * - Реализовать смену языка
 * - Оптимизировать обновление `content storage`
 */

const RawBodyEditor = () => {
	const dispatch = useAppDispatch();
	const storageContent = useAppSelector((state) => state.requestBodyRawContentReducer);
	const { updateRawContent } = requestBodyRawContentSlice.actions;

	const [val, setVal] = useState(storageContent);

	const editorSetup: BeforeMount = (monaco) => {
		monaco.editor.defineTheme("js-dark", {
			inherit: true,
			base: "vs-dark",
			colors: {
				"breadcrumb.activeSelectionForeground": "#614fd1",
				"breadcrumb.background": "#212121",
				"breadcrumb.focusForeground": "#b2bdbd",
				"breadcrumb.foreground": "#848484",
				"breadcrumbPicker.background": "#1a1a1a",
				"button.background": "#61616150",
				"debugToolBar.background": "#212121",
				"dropdown.background": "#212121",
				"dropdown.border": "#ffffff10",
				"editor.background": "#1e1e1e",
				"editor.lineHighlightBackground": "#61616150",
				"editor.selectionBackground": "#61616150",
				"editor.selectionHighlightBackground": "#ffcc0020",
				"editorError.foreground": "#ff537070",
				"editorLineNumber.activeForeground": "#614fd1",
				"editorLineNumber.foreground": "#ffffff80",
				"editor.border": "#ffffff",
				"editorSuggestWidget.foreground": "#614fd1",
				"editorHoverWidget.color": "#614fd1",
				"editorSuggestWidget.highlightForeground": "#614fd1",
				"editorWarning.foreground": "#c3e88d70",
				"editorWhitespace.foreground": "#eeffff40",
				"editorWidget.background": "#272727",
				"editorWidget.border": "#614fd1",
				"editorWidget.resizeBorder": "#614fd1",
				"focusBorder": "#614fd1",
				"input.placeholderForeground": "#eeffff60",
				"inputOption.activeBorder": "#614fd1",
				"inputValidation.errorBorder": "#ff537050",
				"inputValidation.infoBorder": "#9393bf",
				"inputValidation.warningBorder": "#ffcb6b50",
				"list.activeSelectionBackground": "#1a1a1a",
				"list.activeSelectionForeground": "#614fd1",
				"list.highlightForeground": "#614fd1",
				"list.focusBackground": "#eeffff20",
				"list.focusForeground": "#b2bdbd",
				"list.hoverBackground": "#1a1a1a",
				"list.hoverForeground": "#bababa",
				"scrollbarSlider.activeBackground": "#614fd1",
				"scrollbarSlider.background": "#eeffff10",
				"scrollbarSlider.hoverBackground": "#eeffff20"
			},
			rules: [
				{
					token: "keyword.js",
					foreground: "#614fd1"
				},
				{
					token: "typeKeywords",
					foreground: "#614fd1"
				}
			]
		});

		monaco.editor.setTheme("js-dark");
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
				value={val}
				height={"100%"}
				width={"100%"}
				theme="js-dark"
				defaultLanguage="javascript"
				onChange={(value) => {
					setVal(value || "");
				}}
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
					hover: { enabled: false }
				}}
				beforeMount={editorSetup}
			/>
		</div>
	);
};

export default RawBodyEditor;
