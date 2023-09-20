import { useState, useRef, useEffect } from "react";
import { useClassnames } from "../../../hooks/useClassnames";

import { IconChevronDown, IconChevronUp, IconSearch } from "@tabler/icons-react";

import { v1 as uuidv1 } from "uuid";

import "./Dropdown.scss";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface DropdownProps {
	placeholder?: string;
	searchIcon?: boolean;
	title?: string;
	disableSearch?: boolean;
	itemsInView?: "auto" | number;
	elementPosition?: "static" | "relative";
	data: Array<React.ReactNode>;
	selectedValue: string;
	setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Dropdown = ({
	data,
	placeholder,
	searchIcon = true,
	itemsInView = "auto",
	elementPosition = "static",
	title,
	disableSearch = true,
	selectedValue,
	setSelectedValue
}: DropdownProps) => {
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
			style={setWrapperStyles()}
		>
			<section
				onClick={() => {
					dropdownInputRef.current?.focus();
					if (filteredData) setListIsActive(true);
				}}
			>
				<span className="dropdown_title">{title}</span>
				<div className="dropdown_input_wrapper">
					{!disableSearch && searchIcon && (
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
					></input>
					{disableSearch && (
						<div className="chevron_icon">
							{listIsActive ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
						</div>
					)}
				</div>
			</section>
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
										setSelectedValue(String(element));
										search(element);
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
