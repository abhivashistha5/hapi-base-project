const routes = require('../routes');
const logging = require('./logger');
const goodPlugin = require('../plugins/good');
const swagger = require('../plugins/swagger');

async function init(server) {

  logging.info('Registering the plugins...');
  // register plugins
  await server.register(goodPlugin);
  await server.register(swagger);
  logging.info('Plugin registration complete.');


  logging.info('Registering routes...');
  // register routes
  server.route(routes.userRoute);
  logging.info('Route register complete.');
};


module.exports = {
  init,
};