export default function setValueInLocalStorage (name: any, value: any): void {
  name  = String(name);
  value = String(value);

  localStorage.setItem(name, value);
}