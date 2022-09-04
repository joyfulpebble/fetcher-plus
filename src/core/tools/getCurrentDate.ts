export default function getCurrentDate() {
  const currentDate = new Date();

  return currentDate.toLocaleString();
}