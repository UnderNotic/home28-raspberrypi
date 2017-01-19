const Sequelize = require('sequelize');
const dbFilePath = require('../utils/configuration').sqliteDbFilePath;

let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(dbFilePath);

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

var User = sequelize.define('user', {
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

User.sync().then(function () {
    // Table created
    return User.create({
        login: 'John',
        password: 'Hancock',
        lastAccessed: new Date()
    });
});

User.findAll().then(function (users) {
    console.log(users)
})