const Hapi = require('@hapi/hapi');

const config = require('./conf/appConfig');

const init = async () => {
  const server = Hapi.server({
      port: config.port,
      host: config.host
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();