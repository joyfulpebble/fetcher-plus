export default function getCurrentDate() {
  const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

  const time = [hours, minutes];
  const date = ['day', 'month', 'year']
    .map(e => new Intl.DateTimeFormat('en', { [e]: 'numeric' })
    .format(currentDate)
    .padStart(2, '0'))
    .join('.');

  const result = [date, time.join(':')]; 
  return result.join(' ');
}