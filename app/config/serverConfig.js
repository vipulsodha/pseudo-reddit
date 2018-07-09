/**
 * Created by vipulsodha on 07/07/18.
 */
const Path = require('path');

module.exports = (() => {
    return ({
        port: process.env.PORT || 3000,
        host: process.env.HOST ||'localhost',
        routes: {
            cors: true,
            files: {
                relativeTo: Path.join(__dirname, '../public')
            }
        }
    })
})();