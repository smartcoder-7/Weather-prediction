import moment from 'moment';

export const scaleUnit = (value, factor) => {
  if (!factor) return value;
  return (value / factor).toFixed(2, 10);
};

export const formatDate = (date, format) => {
  return moment(date).format(format);
};
