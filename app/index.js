/**
 * Created by vipulsodha on 07/07/18.
 */

const Hapi = require('hapi');

const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');

const Pack = require('../package');
const routes = require('./controllers/routes');
const serverConfig  = require('./config/serverConfig');

const server = Hapi.server(serverConfig);


const swaggerOptions = {
    info: {
        title: 'API Documentation',
        version: Pack.version,
    },
};

/**
 * Calling this function will initialize the web server.
 * It will add all the respective routes, plugins, etc required and configured
 */
const Init = async () => {

    server.route(routes);

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
};


process.on('unhandledRejection', (err) => {

    console.log(err);

    process.exit(1);

});



module.exports = Init;