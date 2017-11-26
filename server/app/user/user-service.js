const Users = require('../db/db').Users;

function checkIfExists(login, password) {
    return Users.findAll({
        where: {
            login,
            password
        }
    }).then(res => {
        return res.length === 1;
    });
}

module.exports = {
    checkIfExists
};