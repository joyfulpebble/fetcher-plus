import { bodyContentTypes } from "../../../../../../../../tools/constants";

import "./styles/BodyContentTypeList.scss";

export const BodyContentTypesList = () => (
	<>
		{bodyContentTypes.map((element) => (
			<div
				key={element}
				className="body_content_type_list_element"
			>
				{element}
			</div>
		))}
	</>
);
