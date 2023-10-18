const removeAllFiles = () => {
	const idbRequest = indexedDB.open("request-body-files", 1);
	idbRequest.onsuccess = () => {
		const db = idbRequest.result;
		const tx = db.transaction("files", "readwrite");
		const filesStore = tx.objectStore("files");
		const emptyStore = filesStore.clear();

		emptyStore.onsuccess = () => {
			tx.oncomplete = () => {
				db.close();
			};
		};
	};
};

export default removeAllFiles;
