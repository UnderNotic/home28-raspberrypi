const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const key = require('../middlewares/jwt').privateKey;

module.exports = async (login, password) => {
    let exists = await userService.checkIfExists(login, password);
    if (exists) {
        return {
            token: jwt.sign({ role: 'admin' }, key)
        };
    }
    return null;
};