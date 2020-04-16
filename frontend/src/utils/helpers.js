import moment from 'moment';

export const scaleUnit = (value, factor) => {
  if (!factor) return value;
  return (value / factor).toFixed(2, 10);
};

export const formatDate = (date, format) => {
  return moment(date).format(format);
};

export const formatData = (data) => {
  return data.reduce((acc, item) => {
    const temp = {};
    temp.date = new Date(item.dt_txt).getDate();
    temp.main = item.weather[0].main;
    acc.push(temp);
    return acc;
  }, []);
};

export const getStatisticData = (data) => {
  return data.reduce((acc, item) => {
    if (acc[item.date]) {
      if (acc[item.date][item.main]) {
        acc[item.date][item.main] += 1;
      } else {
        acc[item.date][item.main] = 1;
      }
    } else {
      acc[item.date] = {};
      acc[item.date][item.main] = 1;
    }

    return acc;
  }, {});
};

const getMaxFieldFromObj = (obj) => {
  let max = Number.MIN_VALUE;
  let result = {};
  Object.entries(obj).forEach(([key, value], index) => {
    if (value > max) {
      max = value;
      result = {};
      result[key] = value;
    }
  });

  return result;
};

export const getMaxField = (data) => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    acc.push({ date: key, ...getMaxFieldFromObj(value) });
    return acc;
  }, []);
};

export const isInRow = (key) => (data) => {
  if (!data.length) return false;
  for (let i = 0; i < data.length; i += 1) {
    if (!(key in data)) {
      return false;
    }
  }

  return true;
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const getPrediction = (conditions, forecastList) => {
  return conditions.reduce((acc, condition) => {
    let temp = compose(
      isInRow(condition),
      getMaxField,
      getStatisticData,
      formatData,
    )(forecastList);
    if (temp) acc = condition;
    return acc;
  }, '');
};
export const renderString = (prediction) => {
  switch (prediction) {
    case 'Clouds':
      return 'Today is the best day for selling jackets';
    case 'Rain':
      return 'Today is the best day for selling umbrellas';
    default:
      return '';
  }
};
