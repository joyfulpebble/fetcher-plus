interface IdbRequestConfig {
	dbName: string;
	storeName: string;
	txMode: IDBTransactionMode;
	method: "get" | "put" | "delete";
	itemKey: string | number;
	newValue?: Object;
	onsuccess: (value?: IDBRequest<any>) => void;
}

export class IdbRequest {
	constructor({
		dbName,
		method,
		storeName,
		itemKey,
		txMode,
		newValue,
		onsuccess
	}: IdbRequestConfig) {
		const request = indexedDB.open(dbName);

		request.onsuccess = () => {
			const db: IDBDatabase = request.result;
			const tx: IDBTransaction = db.transaction(storeName, txMode);
			const store: IDBObjectStore = tx.objectStore(storeName);

			switch (method) {
				case "get":
					const action: IDBRequest<any> = store.get(itemKey);

					action.onsuccess = () => {
						onsuccess();
						tx.oncomplete = () => {
							db.close();
						};
					};

					break;

				default:
					break;
			}
		};
	}
}
