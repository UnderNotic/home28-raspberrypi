const router = new (require('koa-router'));
const readFileAsync = (require('bluebird')).promisify(require("fs").readFile);
const authenticate = require('./authenticate');

router.get('/', async ctx => {
    let body = Object.assign(
        JSON.parse(await readFileAsync("./package.json", "utf8"))
    );
    ctx.body = JSON.stringify(body, null, 4);
});

router.post('/login', async ctx => {
    let token = authenticate(ctx.request.body.login, ctx.request.body.password);
    if (token) {
        ctx.status = 200;
        ctx.body = {
            token,
            message: "Successfully logged in!"
        };
    } else {
        ctx.status = ctx.status = 401;
        ctx.body = {
            message: "Authentication failed"
        };
    }
});

module.exports = router;