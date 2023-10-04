import { IconChevronDown, IconFilePlus, IconTrash } from "@tabler/icons-react";
import { BodyContentTypesList } from "./BodyContentTypesList";
import { BodyRawTypesList } from "./BodyRawTypesList";
import Tippy from "@tippyjs/react";

import { useAppDispatch, useAppSelector } from "../../../../../../../../hooks/redux/redux";
import requestBodyFormDataSlice from "../../../../../../../../redux/reducers/requestBodyFormDataSlice";

import { v1 as uuidv1 } from "uuid";
import "./styles/Body.scss";

export const Body = () => {
	const { contentType, rawType } = useAppSelector((state) => state.requestBodyTypeReducer);
	const dispatch = useAppDispatch();
	const { addBodyFormDataTextItem } = requestBodyFormDataSlice.actions;

	return (
		<>
			<section className="request_additional_option_header_wrapper">
				<div className="body_conntent_type_select_wrapper">
					<span className="request_additional_option_name">Body</span>
					<div className="request_additional_body_type">
						<Tippy
							className="body_content_type_tippy_wrapper"
							placement="bottom"
							content={<BodyContentTypesList />}
							interactive={true}
							hideOnClick={true}
							animation="shift-away"
							trigger="click"
							arrow={false}
							zIndex={10}
							offset={[49, 5]}
						>
							<div className="body_content_type_select">
								<span className="body_content_type">{contentType}</span>
								<IconChevronDown size={15} />
							</div>
						</Tippy>
					</div>
					{contentType === "raw" && (
						<Tippy
							className="body_raw_type_tippy_wrapper"
							placement="bottom"
							content={<BodyRawTypesList />}
							interactive={true}
							hideOnClick={true}
							animation="shift-away"
							trigger="click"
							arrow={false}
							zIndex={10}
							offset={[15, 5]}
						>
							<div className="body_raw_type_select">
								<span className="body_raw_type">{rawType}</span>
								<IconChevronDown size={15} />
							</div>
						</Tippy>
					)}
				</div>
				<div className="request_additional_option_controls">
					<div className="add_new">
						<Tippy
							className="base_tippy_wrapper"
							placement="top"
							content={"Import"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
						>
							<IconFilePlus
								size={16}
								stroke={2}
							/>
						</Tippy>
					</div>
					<div className="delete_all">
						<Tippy
							className="base_tippy_wrapper"
							placement="top"
							content={"Clear all"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
							offset={[-15, 10]}
						>
							<IconTrash
								size={16}
								stroke={2}
							/>
						</Tippy>
					</div>
				</div>
			</section>
			<section className="headers_body_wrapper">
				<input
					type="file"
					onChange={async (event) => {
						const fileId = uuidv1();
						const tempUrl = URL.createObjectURL(event.target.files![0]);
						const blob = await fetch(tempUrl).then((res) => res.blob());

						const idbRequest = indexedDB.open("request-body-files", 1);
						idbRequest.onsuccess = () => {
							const db = idbRequest.result;
							const tx = db.transaction("files", "readwrite");
							const filesStore = tx.objectStore("files");

							const newFile = filesStore.put(blob, fileId);
							newFile.onsuccess = () => {
								tx.oncomplete = () => {
									db.close();
								};
							};
						};

						dispatch(
							addBodyFormDataTextItem({
								_id: fileId,
								isUsed: true,
								fieldValueType: "file",
								fieldKey: uuidv1()
							})
						);
					}}
				/>
			</section>
		</>
	);
};
