import { useState, useRef, useEffect } from "react";
import { useClassnames } from "../../../hooks/useClassnames";

import { IconChevronDown, IconChevronUp, IconSearch } from "@tabler/icons-react";

import { v1 as uuidv1 } from "uuid";

import "./Dropdown.scss";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface DropdownProps {
	placeholder?: string;
	disableSearch?: boolean;
	data: Array<React.ReactNode>;
	selectedValue: string;
	setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Dropdown = ({
	data,
	placeholder,
	disableSearch = true,
	selectedValue,
	setSelectedValue
}: DropdownProps) => {
	const [listIsActive, setListIsActive] = useState(false);

	const dropdownRef = useRef(null);
	const dropdownInputRef = useRef<HTMLInputElement>(null);

	useOutsideClick(dropdownRef, () => {
		setListIsActive(false);
	});

	const list_wrapper_classnames = useClassnames("dropdown_list_wrapper", {
		dropdown_list_disabled: !listIsActive
	});
	const dropdown_input_wrapper_classnames = useClassnames("dropdown_input_wrapper", {
		dropdown_list_active: listIsActive,
		search_disabled: disableSearch
	});
	const dropdown_input_classnames = useClassnames("dropdown_input", {
		search_disabled: disableSearch
	});

	return (
		<div
			className="dropdown_wrapper"
			ref={dropdownRef}
		>
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
				></input>
				{disableSearch && (
					<div className="chevron_icon">
						{listIsActive ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
					</div>
				)}
			</div>
			<div className={list_wrapper_classnames}>
				{data.map(
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
