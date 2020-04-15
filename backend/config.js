const dotenv = require('dotenv');

const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  try {
    dotenv.config();
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  host: process.env.HOST || 'https://localhost',
  port: parseInt(process.env.PORT, 10) || 4000,
  WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  WEATHER_API_BASE_URL:
    process.env.WEATHER_API_BASE_URL ||
    'https://api.openweathermap.org/data/2.5',
  isDev,
};
