import { openDB } from "idb";

const removeFile = async (fileID: string) => {
	(await openDB("request-form-data-files", 1))
		.transaction("files", "readwrite")
		.objectStore("files")
		.delete(fileID);
};

export default removeFile;
