const express = require('express');
const timeRouter = express.Router();

const controller = require('../controllers/dateController');

timeRouter.get('/time', controller.getTime);

module.exports = timeRouter;