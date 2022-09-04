export default function allStorage(storage: Storage): any[] {
  let values: any[] = []
  let keys: string[] = Object.keys(storage)
  let i: number = keys.length;

  while (i--) {
    values.push(storage.getItem(keys[i]));
  }
  return values;
}