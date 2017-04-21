const koa = new (require('koa'));
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const router = require('./middlewares/routes');
const jwt = require('./middlewares/jwt');
const port = process.argv[3] || 3000;


/*



require('./db/db');

koa.use(async (ctx, next) => {
    try {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        console.log(`${ctx.method} ${ctx.url} from ${ctx.host} took ${ms}ms`);
    } catch (err) {
        console.error('Error', err);
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err);
    }
});

koa.use(cors());
koa.use(jwt.middleware);
koa.use(bodyParser());
koa.use(router.routes());
koa.use(router.allowedMethods());

koa.listen(port, () => {
    console.log(`Koa is listening on http://localhost:${port}`);
});


//pm2 gracefully shutdown
// process.on('SIGINT', () => {
//     db.stop(function (err) {
//         process.exit(err ? 1 : 0);
//     });
// });

*/