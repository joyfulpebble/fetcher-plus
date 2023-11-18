import { useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestBodyRawContentSlice from "../../../redux/reducers/requestBodyRawContentSlice";

import Editor, { OnMount } from "@monaco-editor/react";

/** TODO:
 * ✓ Найти/настроить линтеры
 * - Настроить сам редактор
 * * - Изменить контекстное меню
 * * - Убрать лишние бинды
 * * - Убрать минимапу
 * - Отредактировать тему
 * - Реализовать смену языка
 * - Оптимизировать обновление `content storage`
 */

const RawBodyEditor = () => {
	const dispatch = useAppDispatch();
	const storageContent = useAppSelector((state) => state.requestBodyRawContentReducer);
	const { updateRawContent } = requestBodyRawContentSlice.actions;

	const [val, setVal] = useState(storageContent);

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
			/>
		</>
	);
};

export default RawBodyEditor;
