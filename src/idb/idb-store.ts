export const setupIdbStore = () => {
	const requestBodyFormDataFiles = indexedDB.open("request-body-files", 1);

	requestBodyFormDataFiles.onerror = (error) => {
		console.group("> Error in idb-store");
		console.warn(error);
		console.groupEnd();
	};

	requestBodyFormDataFiles.onupgradeneeded = () => {
		const db = requestBodyFormDataFiles.result;

		if (!db.objectStoreNames.contains("files")) {
			db.createObjectStore("files");
		}
	};
};
