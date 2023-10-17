import { useState, useRef, memo } from "react";
import { useClassnames } from "../../../hooks/useClassnames";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

import { IconChevronDown, IconChevronUp, IconSearch } from "@tabler/icons-react";

import { v1 as uuidv1 } from "uuid";

import "./Select.scss";

interface SelectProps {
	initValue?: string;
	placeholder?: string;
	searchIcon?: boolean;
	title?: string;
	disableSearch?: boolean;
	itemsInView?: "auto" | number;
	elementPosition?: "static" | "relative";
	selectStyle?: "invisible" | "default";
	data: Array<React.ReactNode>;
	onChange: (newValue: string) => void;
}

export const Select = memo(function Select({
	data,
	placeholder,
	searchIcon = true,
	itemsInView = "auto",
	elementPosition = "static",
	selectStyle = "default",
	title,
	disableSearch = true,
	onChange,
	initValue
}: SelectProps) {
	const [value, setValue] = useState<string>(initValue || "");
	const [listIsActive, setListIsActive] = useState(false);
	const [filteredData, setFilteredData] = useState<Array<any> | null>(data);

	const selectRef = useRef<HTMLDivElement>(null);
	const selectInputRef = useRef<HTMLInputElement>(null);

	const setListStyles = () => {
		const styles = {
			width: selectRef.current?.offsetWidth,
			maxHeight: itemsInView === "auto" ? 193 : 32 * itemsInView
		};

		return styles;
	};
	const setWrapperStyles = () => {
		const styles = {
			position: elementPosition
		};

		return styles;
	};

	const search = (searchedWord: string) => {
		// eslint-disable-next-line arrow-body-style
		const result = data.filter((str) => {
			return String(str).toLowerCase().includes(searchedWord.toLowerCase());
		});

		if (result.length) {
			setFilteredData(result);
			setListIsActive(true);
		} else {
			setFilteredData(null);
			setListIsActive(false);
		}
	};

	useOutsideClick(selectRef, () => {
		setListIsActive(false);
	});

	const select_input_classnames = useClassnames("select_input", {
		search_disabled: disableSearch
	});
	const select_wrapper_classnames = useClassnames("select_wrapper", {
		list_disabled: !listIsActive,
		select_invisible: selectStyle === "invisible"
	});

	return (
		<div
			className={select_wrapper_classnames}
			ref={selectRef}
			style={setWrapperStyles()}
		>
			{title && (
				<span
					className="select_title"
					onClick={() => {
						selectInputRef.current?.focus();
						if (filteredData) setListIsActive(true);
					}}
				>
					{title}
				</span>
			)}
			<div
				className="select_input_wrapper"
				onClick={() => {
					selectInputRef.current?.focus();
					if (filteredData) setListIsActive(true);
				}}
			>
				{!disableSearch && searchIcon && (
					<div className="search_icon">
						<IconSearch size={16} />
					</div>
				)}
				<input
					className={select_input_classnames}
					ref={selectInputRef}
					placeholder={placeholder}
					value={value}
					readOnly={disableSearch}
					onChange={(event) => {
						if (!disableSearch) search(event.target.value);
						setValue(event.target.value);
						onChange(event.target.value);
					}}
					onFocus={(event) => {
						if (!disableSearch && data === filteredData) search(event.target.value);
					}}
				></input>
				{disableSearch && (
					<div className="chevron_icon">
						{listIsActive ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
					</div>
				)}
			</div>
			{filteredData && (
				<div
					className="select_list_wrapper"
					style={setListStyles()}
				>
					{filteredData.map(
						(element) =>
							!!element && (
								<div
									key={uuidv1()}
									className={`select_list_item`}
									onClick={() => {
										if (!disableSearch) search(element);
										setValue(element);
										onChange(element);
										setListIsActive(false);
									}}
								>
									{element}
								</div>
							)
					)}
				</div>
			)}
		</div>
	);
});
