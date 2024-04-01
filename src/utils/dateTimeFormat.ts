export const formatedDate = (date: Date) => {
  const dateString = date;
  const dateObj = new Date(dateString);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Month is zero-indexed, so we add 1
  const day = dateObj.getDate();

  // Format the date as needed (e.g., YYYY-MM-DD)
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`;

  return formattedDate;
};
export const formatedTime = (time: Date) => {
  const dateTimeString = time;
  const dateObject = new Date(dateTimeString);

  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  // Format the time as needed (e.g., HH:mm:ss)
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
};
