const APIError = require('../utils/api-error');
const request = require('request');
const { promisify } = require('util');
const get = promisify(request.get).bind(request);

const config = require('../../config');

class WeatherController {
  async forecast(req, res, next) {
    try {
      const { city } = req.query;
      const { body } = await get(
        `${config.WEATHER_API_BASE_URL}/forecast?q=${city}&appid=${config.WEATHER_API_KEY}`
      );

      const { cod, message, list } = JSON.parse(body);
      if (cod === '200') {
        res.json(list).end();
      } else {
        throw new APIError(message, Number(cod));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { weatherController: new WeatherController() };
