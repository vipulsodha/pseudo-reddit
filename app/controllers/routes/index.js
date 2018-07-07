const apiRoutes = require('./apiRoutes');
const staticRoutes = require('./staticRoutes');



module.exports = [...apiRoutes, ...staticRoutes];
