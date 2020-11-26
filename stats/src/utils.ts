// Convert string (format DD/MM/YY) to date
export const dateStringToDate = (dateString: string): Date => {
  const newDate = dateString
    .split('/')
    .map((el: string): number => parseInt(el))
    .reverse()
    .join(',');

  return new Date(newDate);
};
