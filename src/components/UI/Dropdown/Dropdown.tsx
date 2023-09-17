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
	const [filteredData, setFilteredData] = useState<Array<any>>(data);

	const dropdownRef = useRef(null);
	const dropdownInputRef = useRef<HTMLInputElement>(null);

	const search = (searchedWord: string) => {
		const result = data.filter((str) =>
			String(str).toLowerCase().includes(searchedWord.toLowerCase())
		);

		if (result.length === 0) {
			setListIsActive(false);
		} else {
			setFilteredData(result);
			setListIsActive(true);
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

	const dropdown_input_classnames = useClassnames("dropdown_input", {
		search_disabled: disableSearch
	});
	const dropdown_wrapper_classnames = useClassnames("dropdown_wrapper", {
		list_disabled: !listIsActive
	});

	return (
		<div
			className={dropdown_wrapper_classnames}
			ref={dropdownRef}
			style={styles}
		>
			<span className="dropdown_title">{title}</span>
			<div
				className="dropdown_input_wrapper"
				onClick={() => {
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
					onChange={(event) => {
						setSelectedValue(event.target.value);
						search(event.target.value);
					}}
					onFocus={(e) => {
						if (!e.currentTarget.value) {
							if (
								filteredData.length === 0 /*
								? !String(data).toLowerCase().includes(e.currentTarget.value.toLowerCase())
								*/
							) {
								setListIsActive(false);
							} else setListIsActive(true);
						} else {
							search(e.currentTarget.value);
							setListIsActive(true);
						}
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
