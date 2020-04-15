const APIError = require('../utils/api-error');

class WeatherController {
  async fake1(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { weatherController: new WeatherController() };
