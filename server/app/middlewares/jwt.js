const koaJwt = require('koa-jwt');

let privateKey = process.env.JWT_KEY;
if (!privateKey) {
    console.error("System environment variable JWT_KEY is not set, for now using test string.");
    privateKey = "test";
}

module.exports = {
    privateKey,
    middleware: koaJwt({
        secret: privateKey
    }).unless({ path: [/^\/login/] })
};
