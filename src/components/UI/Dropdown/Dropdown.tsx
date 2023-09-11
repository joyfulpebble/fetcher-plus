import { useState, useRef, useEffect } from "react";
import { useClassnames } from "../../../hooks/useClassnames";

import { IconSearch } from "@tabler/icons-react";

import { v1 as uuidv1 } from "uuid";

import "./Dropdown.scss";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface DropdownProps {
	placeholder?: string;
	data: Array<React.ReactNode>;
	selectedValue: string;
	setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Dropdown = ({ data, placeholder, selectedValue, setSelectedValue }: DropdownProps) => {
	const [listIsActive, setListIsActive] = useState(false);
	const [filteredData, setFilteredData] = useState<React.ReactNode[]>(data);

	const dropdownRef = useRef(null);
	const dropdownInputRef = useRef<HTMLInputElement>(null);

	const handleFilter = (searchWord: string): void => {
		setSelectedValue(searchWord);

		const filtered = data.filter((value) =>
			String(value).toLowerCase().includes(searchWord.toLowerCase())
		);

		if (!searchWord) setFilteredData(data);
		else setFilteredData(filtered);

		if (!!filtered.length) setListIsActive(true);
		else setListIsActive(false);
	};

	useOutsideClick(dropdownRef, () => {
		setListIsActive(false);
	});

	useEffect(() => {
		handleFilter(dropdownInputRef.current!.value);
	}, [selectedValue]);

	const list_classnames = useClassnames("dropdown_list_wrapper", {
		dropdown_list_disabled: !listIsActive
	});
	const dropdown_classnames = useClassnames("dropdown_input_wrapper", {
		dropdown_list_active: listIsActive
	});

	return (
		<div
			className="dropdown_wrapper"
			ref={dropdownRef}
		>
			<div className={dropdown_classnames}>
				<div className="dropdown_search_icon">
					<IconSearch size={16} />
				</div>
				<input
					className="dropdown_input"
					ref={dropdownInputRef}
					placeholder={placeholder}
					value={selectedValue}
					onFocus={() => {
						if (!!filteredData.length) setListIsActive(true);
						else setListIsActive(false);
					}}
					onChange={() => {
						setSelectedValue(dropdownInputRef.current!.value);
					}}
				></input>
			</div>
			<div className={list_classnames}>
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
		</div>
	);
};
