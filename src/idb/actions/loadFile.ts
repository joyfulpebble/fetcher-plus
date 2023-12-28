import { openDB } from "idb";

interface LoadedFileData {
	id: string;
	name: string;
	blob: Blob;
}

async function loadFile(fileData: LoadedFileData) {
	(await openDB("request-form-data-files", 1))
		.transaction("files", "readwrite")
		.objectStore("files")
		.put({
			id: fileData.id,
			name: fileData.name,
			blob: fileData.blob
		});
}

export default loadFile;
