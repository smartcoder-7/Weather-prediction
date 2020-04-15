const express = require('express');
const { weatherController } = require('../controllers');

const router = express.Router();

router.route('/fake1').get(weatherController.fake1);

module.exports = { weatherRouter: router };
