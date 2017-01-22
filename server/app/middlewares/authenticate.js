const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const key = require('../middlewares/jwt').privateKey;

module.exports = (login, password) => {
    let exists = userService.checkIfExists(login, password);
    console.log("Exists is", exists);
    if (exists) {
        return {
            token: jwt.sign({ role: 'admin' }, key)
        };
    }
    return null;
};