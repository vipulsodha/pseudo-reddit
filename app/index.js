/**
 * Created by vipulsodha on 07/07/18.
 */

const Hapi = require('hapi');
const serverConfig  = require('./config/serverConfig');
const server = Hapi.server(serverConfig);
const routes = require('./controllers/routes')

/**
 * Calling this function will initialize the web server.
 * It will add all the respective routes, plugins, etc required and configured
 */
const Init = async () => {

    server.route(routes);
    await server.start();

    console.log(`Server running at: ${server.info.uri}`);

};


process.on('unhandledRejection', (err) => {

    console.log(err);

    process.exit(1);

});



module.exports = Init;