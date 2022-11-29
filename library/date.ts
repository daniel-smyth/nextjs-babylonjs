export const getDateXDaysAgo = (days: number, date = new Date()) => {
  const hours = days * 24;
  date.setHours(date.getHours() - hours);

  return date;
};

export const getDateXDaysFromNow = (days: number, date = new Date()) => {
  const hours = days * 24;
  date.setHours(date.getHours() - hours);

  return date;
};

export const getDateXHoursAgo = (hours: number, date = new Date()) => {
  date.setHours(date.getHours() - hours);

  return date;
};

export const getDateXHoursFromNow = (hours: number, date = new Date()) => {
  date.setHours(date.getHours() + hours);

  return date;
};

export const roundToNearestMinute = (date = new Date()) => {
  const minutes = 1;
  const ms = 1000 * 60 * minutes;

  return new Date(Math.round(date.getTime() / ms) * ms);
};

export const getDateXMinutesAgo = (minutes: number, date = new Date()) => {
  date.setMinutes(date.getMinutes() - minutes);

  return roundToNearestMinute(date);
};

export const getDateXMinutesFromNow = (minutes: number, date = new Date()) => {
  date.setMinutes(date.getMinutes() + minutes);

  return roundToNearestMinute(date);
};

export const getDifferenceInDays = (startDate: Date, endDate: Date) => {
  const diff = Math.abs(endDate.getTime() - startDate.getTime());
  const inDays = Math.ceil(diff / (1000 * 3600 * 24));

  return inDays;
};

export const getDifferenceInSeconds = (startDate: Date, endDate: Date) => {
  const diff = Math.abs(endDate.getTime() - startDate.getTime());
  const inDays = Math.ceil(diff / 1000);

  return inDays;
};

export const dateToExcelDate = (date: Date) =>
  25569.0 +
  (date.getTime() - date.getTimezoneOffset() * 60 * 1000) /
    (1000 * 60 * 60 * 24);
