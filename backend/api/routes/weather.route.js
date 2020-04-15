const express = require('express');
const { weatherController } = require('../controllers');

const router = express.Router();

router.route('/').get(weatherController.forecast);

module.exports = { weatherRouter: router };
