const express = requrie('express');
const { weatherRouter } = require('./routes');

const router = express.Router();
router.use('/weather', weatherRouter);

module.exports = { apiRouter: router };
