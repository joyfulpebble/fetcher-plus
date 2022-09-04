export default function allStorage(storage: Storage): any {
  let values = [],
    keys = Object.keys(storage),
    i = keys.length;

  while ( i-- ) {
    values.push(storage.getItem(keys[i]));
  }
  return values;
}