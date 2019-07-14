const good = require('@hapi/good');

const options = {
  ops: {
    interval: 1000
  },
  reporters: {
    myConsoleReporter: [
      {
        module: '@hapi/good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }]
      },
      {
        module: '@hapi/good-console',
        args: [{ format: 'YYYY-MM-DD[T]HH:mm:ss[Z]' }]
      },
      'stdout'
    ]
  }
};

module.exports = {
  plugin: good,
  options,
}