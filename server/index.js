const fs = require('fs');
const app = require('./app');
const config = require('./config');
const env = process.env;
const port = env.PORT || (env.PORT = config.defaultPort);
const isSocket = isNaN(port);

exports.start = function() {
    app
        .listen(port, () => {
            isSocket && fs.chmod(port, '0777');
            console.log('server is listening on', port);
        })
        .once('error', (err) => {
            console.log('worker %s has failed to start application', process.pid);

            if (err.code === 'EADDRINUSE') {
                console.log('port or socket %s is taken', port);
                process.kill();
                return;
            }

            console.log(err.stack);
        });
};

if (!module.parent) {
    if (fs.existsSync(port)) {
        try {
            fs.unlinkSync(port);
        } catch (e) {}
    }

    exports.start();
}