import Input from "../../ui/Input/Input";

import { useUrlEncodedListItem } from "./hooks/useUrlEncodedListItem";
import type { BodyUrlEncodedItem } from "../../../redux/reducers/requestBodyUrlEncodedSlice";

import { IconTrash, IconGripVertical, IconCheckbox, IconSquare } from "@tabler/icons-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./styles/UrlEncodedListItem.scss";

interface UrlEncodedListItemProps {
	data: BodyUrlEncodedItem;
}

const UrlEncodedListItem = ({ data }: UrlEncodedListItemProps) => {
	const {
		deletUrlEncodedItemFunc,
		updateUrlEncodedItemKeyFunc,
		updateUrlEncodedItemState,
		updateUrlEncodedItemValueFunc
	} = useUrlEncodedListItem(data);

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
		id: data._id
	});
	const styleOnDrag = {
		transform: CSS.Transform.toString(transform),
		transition
	};

	return (
		<section
			ref={setNodeRef}
			style={styleOnDrag}
			className="url_encoded_item"
		>
			<section className="url_encoded_controls">
				<div className="url_encoded_dragger">
					<IconGripVertical
						style={{ outline: "none" }}
						size={16}
						{...attributes}
						{...listeners}
					/>
				</div>
				<div className="url_encoded_select">
					{data.isUsed ? (
						<IconCheckbox
							size={16}
							onClick={() => updateUrlEncodedItemState()}
						/>
					) : (
						<IconSquare
							size={16}
							onClick={() => updateUrlEncodedItemState()}
						/>
					)}
				</div>
			</section>
			<section className="url_encoded_key_val">
				<div className="url_encoded_key">
					<Input
						name={`url_encoded_key=${data.key}`}
						placeholder="Data key"
						inputStyle="invisible"
						onChange={(event) => updateUrlEncodedItemKeyFunc(event)}
						defaultValue={data.key}
					/>
				</div>
				<div className="url_encoded_val">
					<Input
						name={`url_encoded_value=${data.value}`}
						placeholder="Data value"
						inputStyle="invisible"
						onChange={(event) => updateUrlEncodedItemValueFunc(event)}
						defaultValue={data.value}
					/>
					<div className="url_encoded_delete">
						<IconTrash
							size={16}
							onClick={() => deletUrlEncodedItemFunc()}
						/>
					</div>
				</div>
			</section>
		</section>
	);
};

export default UrlEncodedListItem;
