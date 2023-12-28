import { openDB } from "idb";

export const formDataFilesIdbStore = async () => {
	await openDB("request-form-data-files", 1, {
		upgrade: (db) => {
			if (!db.objectStoreNames.contains("files")) {
				db.createObjectStore("files", { keyPath: "id" });
			}
		}
	});
};
