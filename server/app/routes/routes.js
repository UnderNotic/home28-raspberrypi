const router = new (require('koa-router'));
const readFileAsync = (require('bluebird')).promisify(require("fs").readFile);

router.get('/', async ctx => {
    let body = Object.assign(
        JSON.parse(await readFileAsync("./package.json", "utf8"))
    );
    ctx.body = JSON.stringify(body, null, 4);
});

module.exports = router;