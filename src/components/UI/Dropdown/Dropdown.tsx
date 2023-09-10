import { useState, useRef, useEffect } from "react";
import { useClassnames } from "../../../hooks/useClassnames";

import { IconSearch } from "@tabler/icons-react";

import { v1 as uuidv1 } from "uuid";

import "./Dropdown.scss";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface DropdownProps {
	data: Array<React.ReactNode>;
	selectedValue: string;
	setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
	placeholder?: string;
}

export const Dropdown = ({ data, placeholder, selectedValue, setSelectedValue }: DropdownProps) => {
	const [listIsActive, setListIsActive] = useState(false);
	const [filteredData, setFilteredData] = useState<React.ReactNode[]>(data);

	const dropdownRef = useRef(null);
	const dropdownInputRef = useRef<HTMLInputElement>(null);

	const handleFilter = (event: string /*React.ChangeEvent<HTMLInputElement>*/) => {
		const searchWord = event; //event.target.value;
		setSelectedValue(searchWord);

		const filtered = data.filter((value) =>
			String(value).toLowerCase().includes(searchWord.toLowerCase())
		);

		if (searchWord === "") {
			setFilteredData(data);
		} else {
			setFilteredData(filtered);
		}
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
						setListIsActive(true);
					}}
					onChange={() => {
						setSelectedValue(dropdownInputRef.current!.value);
					}}
				></input>
			</div>
			<div className={list_classnames}>
				{filteredData.map((element) => (
					<div
						key={uuidv1()}
						className={`dropdown_list_item `}
						onClick={() => {
							setSelectedValue(String(element));
							setListIsActive(false);
						}}
					>
						{element}
					</div>
				))}
			</div>
		</div>
	);
};
