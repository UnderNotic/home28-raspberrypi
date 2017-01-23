const Sequelize = require('sequelize');
const dbFilePath = require('../utils/configuration').sqliteDbFilePath;

let sqlite3 = require('sqlite3').verbose();
new sqlite3.Database(dbFilePath);

let sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // SQLite only
    storage: dbFilePath
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database:', err);
    });

let Users = sequelize.define('user', {
    login: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    },
    lastAccessed: {
        type: Sequelize.DATE
    }
});

Users.sync();

module.exports = {
    Users
};