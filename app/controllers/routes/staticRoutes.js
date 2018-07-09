/**
 * Created by vipulsodha on 07/07/18.
 */

/**
 * This api contains all the static routes
 * 
 * @type {Array}
 */

const httpMethods = require('../../util/httpMethods');

module.exports = [
    {
        method: httpMethods.GET,
        path: '/',
        handler: (request, h) => {
            return h.file('index.html');
        }
    },
    {
        method: httpMethods.GET,
        path: '/index.bundle.js',
        handler: (request, h) => {
            return h.file('index.bundle.js');
        }
    }
];