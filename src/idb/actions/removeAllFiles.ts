import { openDB } from "idb";

const removeAllFiles = async () => {
	(await openDB("request-form-data-files", 1))
		.transaction("files", "readwrite")
		.objectStore("files")
		.clear();
};

export default removeAllFiles;
