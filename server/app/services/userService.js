const Users = require('../db/db').Users;

async function checkIfExists(login, password) {
    Users.findAll({ where: { login, password } }).then(res => {
        console.log("res iss", res)
        //return res === 1;
    });
}

module.exports = {
    checkIfExists
};