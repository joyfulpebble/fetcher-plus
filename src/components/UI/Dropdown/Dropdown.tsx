import { useState, useRef } from "react";
import { useClassnames } from "../../../hooks/useClassnames";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

import { IconChevronDown, IconChevronUp, IconSearch } from "@tabler/icons-react";

import { v1 as uuidv1 } from "uuid";

import "./Dropdown.scss";

interface DropdownProps {
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

export const Dropdown = ({
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
}: DropdownProps) => {
	const [value, setValue] = useState<string>(initValue || "");
	const [listIsActive, setListIsActive] = useState(false);
	const [filteredData, setFilteredData] = useState<Array<any> | null>(data);

	const dropdownRef = useRef<HTMLDivElement>(null);
	const dropdownInputRef = useRef<HTMLInputElement>(null);

	const setListStyles = () => {
		const styles = {
			width: dropdownRef.current?.offsetWidth,
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

	useOutsideClick(dropdownRef, () => {
		setListIsActive(false);
	});

	const dropdown_input_classnames = useClassnames("dropdown_input", {
		search_disabled: disableSearch
	});
	const dropdown_wrapper_classnames = useClassnames("dropdown_wrapper", {
		list_disabled: !listIsActive,
		select_invisible: selectStyle === "invisible"
	});

	return (
		<div
			className={dropdown_wrapper_classnames}
			ref={dropdownRef}
			style={setWrapperStyles()}
		>
			{title && (
				<span
					className="dropdown_title"
					onClick={() => {
						dropdownInputRef.current?.focus();
						if (filteredData) setListIsActive(true);
					}}
				>
					{title}
				</span>
			)}
			<div
				className="dropdown_input_wrapper"
				onClick={() => {
					dropdownInputRef.current?.focus();
					if (filteredData) setListIsActive(true);
				}}
			>
				{!disableSearch && searchIcon && (
					<div className="search_icon">
						<IconSearch size={16} />
					</div>
				)}
				<input
					className={dropdown_input_classnames}
					ref={dropdownInputRef}
					placeholder={placeholder}
					value={value}
					readOnly={disableSearch}
					onChange={(event) => {
						setValue(event.target.value);
						search(event.target.value);
						onChange(event.target.value);
					}}
					onFocus={(event) => {
						if (data === filteredData) search(event.target.value);
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
					className="dropdown_list_wrapper"
					style={setListStyles()}
				>
					{filteredData.map(
						(element) =>
							!!element && (
								<div
									key={uuidv1()}
									className={`dropdown_list_item`}
									onClick={() => {
										search(element);
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
};
