const Hapi = require('@hapi/hapi');

const config = require('./conf/appConfig');
const Bootstrap = require('./utils/bootstrap');
const logging = require('./utils/logger');

const init = async () => {
  const server = Hapi.server({
      port: config.port,
      host: config.host
  });

  await Bootstrap.init(server);

  await server.start();
  logging.info('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  logging.error(err);
  process.exit(1);
});

init();