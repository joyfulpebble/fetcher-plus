const removeFile = (fileID: string) => {
	const idbRequest = indexedDB.open("request-body-files", 1);

	idbRequest.onsuccess = () => {
		const db = idbRequest.result;
		const tx = db.transaction("files", "readwrite");
		const filesStore = tx.objectStore("files");

		const deletingFile = filesStore.delete(fileID);

		deletingFile.onsuccess = () => {
			tx.oncomplete = () => {
				db.close();
			};
		};
	};
};

export default removeFile;
