import { IDBPDatabase } from "idb";

export async function idb_get(
	key: string | number,
	db: Promise<IDBPDatabase>,
	store_name: string
) {
	return (await db).get(store_name, key);
}

export async function idb_set(
	key: string | number,
	val: any,
	db: Promise<IDBPDatabase>,
	store_name: string
) {
	return (await db).put(store_name, val, key);
}

export async function idb_del(
	key: string | number,
	db: Promise<IDBPDatabase>,
	store_name: string
) {
	return (await db).delete(store_name, key);
}

export async function idb_clear(db: Promise<IDBPDatabase>, store_name: string) {
	return (await db).clear(store_name);
}

export async function idb_get_keys(
	db: Promise<IDBPDatabase>,
	store_name: string
) {
	return (await db).getAllKeys(store_name);
}
