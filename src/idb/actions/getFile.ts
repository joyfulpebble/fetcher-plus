import { openDB } from "idb";

interface FileData {
	id: string;
	name: string;
	blob: Blob;
}

const getFile = async (fileID: string) => {
	const blob: Promise<FileData | null> = (await openDB("request-form-data-files", 1))
		.transaction("files", "readwrite")
		.objectStore("files")
		.get(fileID);

	return blob;
};

export default getFile;
