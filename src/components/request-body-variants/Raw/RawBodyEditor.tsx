import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestBodyRawContentSlice from "../../../redux/reducers/requestBodyRawContentSlice";

import Editor, { OnMount } from "@monaco-editor/react";

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

	const editorSetup: OnMount = (editor, monaco) => {
		monaco.editor.defineTheme("js-dark", {
			inherit: true,
			base: "vs-dark",
			colors: {
				"activityBar.background": "#1a1a1a",
				"activityBar.border": "#00000060",
				"activityBar.foreground": "#b2bdbd",
				"activityBarBadge.background": "#614fd1",
				"activityBarBadge.foreground": "#000000",
				"badge.background": "#00000030",
				"badge.foreground": "#4a4a4a",
				"breadcrumb.activeSelectionForeground": "#614fd1",
				"breadcrumb.background": "#212121",
				"breadcrumb.focusForeground": "#b2bdbd",
				"breadcrumb.foreground": "#848484",
				"breadcrumbPicker.background": "#1a1a1a",
				"button.background": "#61616150",
				"debugToolBar.background": "#212121",
				"diffEditor.insertedTextBackground": "#c3e88d15",
				"diffEditor.removedTextBackground": "#ff537020",
				"dropdown.background": "#212121",
				"dropdown.border": "#ffffff10",
				"editor.background": "#1e1e1e",
				"editor.foreground": "#9393bf",
				"editor.lineHighlightBackground": "#61616150",
				"editor.selectionBackground": "#61616150",
				"editor.selectionHighlightBackground": "#ffcc0020",
				"editorBracketMatch.background": "#212121",
				"editorBracketMatch.border": "#ffcc0050",
				"editorCursor.foreground": "#ffffff",
				"editorError.foreground": "#ff537070",
				"editorGroup.border": "#00000030",
				"editorGroupHeader.tabsBackground": "#212121",
				"editorGutter.addedBackground": "#c3e88d60",
				"editorGutter.deletedBackground": "#ff537060",
				"editorGutter.modifiedBackground": "#82aaff60",
				"editorHoverWidget.background": "#212121",
				"editorHoverWidget.border": "#ffffff10",
				"editorIndentGuide.activeBackground": "#424242",
				"editorIndentGuide.background": "#42424270",
				"editorLineNumber.activeForeground": "#848484",
				"editorLineNumber.foreground": "#424242",
				"editorLink.activeForeground": "#b2bdbd",
				"editorMarkerNavigation.background": "#eeffff05",
				"editorOverviewRuler.border": "#212121",
				"editorRuler.foreground": "#424242",
				"editorSuggestWidget.background": "#212121",
				"editorSuggestWidget.border": "#ffffff10",
				"editorSuggestWidget.foreground": "#6079a6",
				"editorSuggestWidget.highlightForeground": "#614fd1",
				"editorSuggestWidget.selectedBackground": "#00000050",
				"editorWarning.foreground": "#c3e88d70",
				"editorWhitespace.foreground": "#eeffff40",
				"editorWidget.background": "#1a1a1a",
				"editorWidget.border": "#ff0000",
				"editorWidget.resizeBorder": "#614fd1",
				"extensionButton.prominentBackground": "#c3e88d90",
				"extensionButton.prominentHoverBackground": "#c3e88d",
				"focusBorder": "#614fd1",
				"gitDecoration.conflictingResourceForeground": "#ffcb6b90",
				"gitDecoration.deletedResourceForeground": "#ff537090",
				"gitDecoration.ignoredResourceForeground": "#84848490",
				"gitDecoration.modifiedResourceForeground": "#82aaff90",
				"gitDecoration.untrackedResourceForeground": "#c3e88d90",
				"input.background": "#2b2b2b",
				"input.border": "#ffffff10",
				"input.foreground": "#b2bdbd",
				"input.placeholderForeground": "#eeffff60",
				"inputOption.activeBorder": "#614fd1",
				"inputValidation.errorBorder": "#ff537050",
				"inputValidation.infoBorder": "#82aaff50",
				"inputValidation.warningBorder": "#ffcb6b50",
				"list.activeSelectionBackground": "#1a1a1a",
				"list.activeSelectionForeground": "#614fd1",
				"list.focusBackground": "#eeffff20",
				"list.focusForeground": "#b2bdbd",
				"list.highlightForeground": "#614fd1",
				"list.hoverBackground": "#1a1a1a",
				"list.hoverForeground": "#bababa",
				"list.inactiveSelectionBackground": "#00000030",
				"list.inactiveSelectionForeground": "#614fd1",
				"listFilterWidget.background": "#00000030",
				"listFilterWidget.noMatchesOutline": "#00000030",
				"listFilterWidget.outline": "#00000030",
				"menu.background": "#212121",
				"menu.foreground": "#b2bdbd",
				"menu.selectionBackground": "#00000050",
				"menu.selectionBorder": "#00000030",
				"menu.selectionForeground": "#614fd1",
				"menu.separatorBackground": "#b2bdbd",
				"menubar.selectionBackground": "#00000030",
				"menubar.selectionBorder": "#00000030",
				"menubar.selectionForeground": "#614fd1",
				"notificationLink.foreground": "#614fd1",
				"notifications.background": "#212121",
				"notifications.foreground": "#b2bdbd",
				"panel.background": "#1a1a1a",
				"panel.border": "#00000060",
				"panelTitle.activeBorder": "#614fd1",
				"panelTitle.activeForeground": "#bababa",
				"panelTitle.inactiveForeground": "#b2bdbd",
				"peekView.border": "#00000030",
				"peekViewEditor.background": "#eeffff05",
				"peekViewEditor.matchHighlightBackground": "#61616150",
				"peekViewEditorGutter.background": "#eeffff05",
				"peekViewResult.background": "#eeffff05",
				"peekViewResult.matchHighlightBackground": "#61616150",
				"peekViewResult.selectionBackground": "#84848470",
				"peekViewTitle.background": "#eeffff05",
				"peekViewTitleDescription.foreground": "#eeffff60",
				"pickerGroup.foreground": "#614fd1",
				"progressBar.background": "#614fd1",
				"scrollbar.shadow": "#21212100",
				"scrollbarSlider.activeBackground": "#614fd1",
				"scrollbarSlider.background": "#eeffff20",
				"scrollbarSlider.hoverBackground": "#eeffff10",
				"selection.background": "#b2bdbd",
				"settings.checkboxBackground": "#1a1a1a",
				"settings.checkboxForeground": "#b2bdbd",
				"settings.dropdownBackground": "#1a1a1a",
				"settings.dropdownForeground": "#b2bdbd",
				"settings.headerForeground": "#614fd1",
				"settings.modifiedItemIndicator": "#614fd1",
				"settings.numberInputBackground": "#1a1a1a",
				"settings.numberInputForeground": "#b2bdbd",
				"settings.textInputBackground": "#1a1a1a",
				"settings.textInputForeground": "#b2bdbd",
				"sideBar.background": "#1a1a1a",
				"sideBar.border": "#00000060",
				"sideBar.foreground": "#848484",
				"sideBarSectionHeader.background": "#1a1a1a",
				"sideBarSectionHeader.border": "#00000060",
				"sideBarTitle.foreground": "#b2bdbd",
				"statusBar.background": "#1a1a1a",
				"statusBar.border": "#00000060",
				"statusBar.debuggingBackground": "#c792ea",
				"statusBar.debuggingForeground": "#bababa",
				"statusBar.foreground": "#616161",
				"statusBar.noFolderBackground": "#212121",
				"statusBarItem.hoverBackground": "#4a4a4a20",
				"tab.activeBorder": "#614fd1",
				"tab.activeForeground": "#bababa",
				"tab.activeModifiedBorder": "#848484",
				"tab.border": "#212121",
				"tab.inactiveBackground": "#212121",
				"tab.inactiveForeground": "#848484",
				"tab.unfocusedActiveBorder": "#4a4a4a",
				"tab.unfocusedActiveForeground": "#b2bdbd",
				"terminal.ansiBlack": "#000000",
				"terminal.ansiBlue": "#82aaff",
				"terminal.ansiBrightBlack": "#4a4a4a",
				"terminal.ansiBrightBlue": "#82aaff",
				"terminal.ansiBrightCyan": "#89ddff",
				"terminal.ansiBrightGreen": "#c3e88d",
				"terminal.ansiBrightMagenta": "#c792ea",
				"terminal.ansiBrightRed": "#ff5370",
				"terminal.ansiBrightWhite": "#bababa",
				"terminal.ansiBrightYellow": "#ffcb6b",
				"terminal.ansiCyan": "#89ddff",
				"terminal.ansiGreen": "#c3e88d",
				"terminal.ansiMagenta": "#c792ea",
				"terminal.ansiRed": "#ff5370",
				"terminal.ansiWhite": "#c1c1c1",
				"terminal.ansiYellow": "#ffcb6b",
				"textLink.activeForeground": "#b2bdbd",
				"textLink.foreground": "#614fd1",
				"titleBar.activeBackground": "#1a1a1a",
				"titleBar.activeForeground": "#b2bdbd",
				"titleBar.border": "#00000060",
				"titleBar.inactiveBackground": "#1a1a1a",
				"titleBar.inactiveForeground": "#848484",
				"widget.shadow": "#00000030"
			},
			rules: [
				{
					foreground: "#6b5ccc99",
					token: "keyword"
				},
				{
					foreground: "#FFFFFF",
					token: "delimiter"
				}
			]
		});

		monaco.editor.setTheme("js-dark");
	};

	return (
		<>
			<Editor
				value={val}
				height={"100%"}
				width={"100%"}
				theme="vs-dark"
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
					contextmenu: false
				}}
				onMount={editorSetup}
			/>
		</>
	);
};

export default RawBodyEditor;
