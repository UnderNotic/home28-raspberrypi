const koaJwt = require('koa-jwt');
const crypto = require('crypto');

let privateKey = process.env.JWT_KEY;
if (!privateKey) {
    console.error("System environment variable JWT_KEY is not set, for now using random string");
    let buffer = crypto.randomBytes(64);
    privateKey = buffer.toString('hex');
}

module.exports = {
    privateKey,
    middleware: koaJwt({
        secret: privateKey
    }).unless({ path: [/^\/login/] })
};
