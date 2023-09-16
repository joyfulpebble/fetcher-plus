import { useState, useRef, useEffect } from "react";
import { useClassnames } from "../../../hooks/useClassnames";

import { IconChevronDown, IconChevronUp, IconSearch } from "@tabler/icons-react";

import { v1 as uuidv1 } from "uuid";

import "./Dropdown.scss";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface DropdownProps {
	placeholder?: string;
	title?: string;
	disableSearch?: boolean;
	styles?: {
		width?: string | number;
		maxWidth?: string | number;
		height?: string | number;
		maxHeight?: string | number;
	};
	data: Array<React.ReactNode>;
	selectedValue: string;
	setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Dropdown = ({
	data,
	placeholder,
	title,
	styles,
	disableSearch = true,
	selectedValue,
	setSelectedValue
}: DropdownProps) => {
	const [listIsActive, setListIsActive] = useState(false);
	const [filteredData, setFilteredData] = useState<Array<any> | null>(data);

	const dropdownRef = useRef(null);
	const dropdownInputRef = useRef<HTMLInputElement>(null);

	const search = (searchedWord: string) => {
		const result = data.filter((str) =>
			String(str).toLowerCase().includes(searchedWord.toLowerCase())
		);

		if (result.length === 0) {
			setListIsActive(false);
			setFilteredData(null);
		} else {
			setListIsActive(true);
			setFilteredData(result);
		}
	};

	useEffect(
		() => () => {
			setSelectedValue("");
		},
		[]
	);
	useOutsideClick(dropdownRef, () => {
		setListIsActive(false);
	});

	const list_wrapper_classnames = useClassnames("dropdown_list_wrapper", {
		dropdown_list_disabled: !listIsActive
	});
	const dropdown_input_wrapper_classnames = useClassnames("dropdown_input_wrapper", {
		search_disabled: disableSearch,
		active: listIsActive
	});
	const dropdown_input_classnames = useClassnames("dropdown_input", {
		search_disabled: disableSearch
	});

	return (
		<div
			className="dropdown_wrapper"
			ref={dropdownRef}
			style={styles}
		>
			<span className="dropdown_title">{title}</span>
			<div
				className={dropdown_input_wrapper_classnames}
				onClick={() => {
					setListIsActive(!listIsActive);
					dropdownInputRef.current?.focus();
				}}
			>
				{!disableSearch && (
					<div className="search_icon">
						<IconSearch size={16} />
					</div>
				)}
				<input
					className={dropdown_input_classnames}
					ref={dropdownInputRef}
					placeholder={placeholder}
					value={selectedValue}
					readOnly={disableSearch}
					onClick={(event) => {
						if (event.currentTarget.value === undefined) {
							setListIsActive(false);
						} else setListIsActive(true);
					}}
					onChange={(event) => {
						setSelectedValue(event.target.value);
						search(event.target.value);
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
					className={list_wrapper_classnames}
					style={styles}
				>
					{filteredData.map(
						(element) =>
							!!element && (
								<div
									key={uuidv1()}
									className={`dropdown_list_item`}
									onClick={() => {
										setSelectedValue(String(element));
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
