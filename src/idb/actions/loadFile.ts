interface LoadedFileData {
	id: string;
	name: string;
	blob: Blob;
}

function loadFile(fileData: LoadedFileData) {
	const idbRequest = indexedDB.open("request-body-files", 1);
	idbRequest.onsuccess = () => {
		const db = idbRequest.result;
		const tx = db.transaction("files", "readwrite");
		const filesStore = tx.objectStore("files");
		const newFile = filesStore.put(fileData);
		newFile.onsuccess = () => {
			tx.oncomplete = () => {
				db.close();
			};
		};
	};
}

export default loadFile;
