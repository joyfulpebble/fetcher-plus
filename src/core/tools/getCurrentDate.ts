export default function getCurrentDate(): string {
  const currentDate: Date = new Date();

  return currentDate.toLocaleString();
}