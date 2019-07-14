const routes = require('../routes');
const goodPlugin = require('../plugins/good');

async function init(server) {
  // register plugins
  await server.register(goodPlugin);

  // register routes
  server.route(routes.userRoute);
};


module.exports = {
  init,
};