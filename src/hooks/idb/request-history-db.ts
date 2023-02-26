import { openDB } from "idb";

export const request_history_db = openDB('request-history', 1, {
  upgrade(db) {
    db.createObjectStore('history');
  },
});