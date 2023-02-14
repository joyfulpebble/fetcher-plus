import Dexie from "dexie";

interface tableT {
  [tableName: string]: string | null;
}

const createIndexdb = (dbname: string, table: tableT) => {
  const db = new Dexie(dbname);
  db.version(1).stores(table);
  db.open();

  return db;
};