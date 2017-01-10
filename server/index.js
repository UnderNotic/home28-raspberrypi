
//pm2 gracefully shutdown
process.on('SIGINT', () => {
    db.stop(function (err) {
        process.exit(err ? 1 : 0);
    });
});