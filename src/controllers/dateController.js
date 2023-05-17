const service = require('../services/dateService');

const getTime = (req, res, next) => {
    const result = service.getCurrentDate();
    return res.json(result);
};

module.exports = {
    getTime
}