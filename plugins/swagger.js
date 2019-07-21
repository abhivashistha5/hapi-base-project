const hapiSwagger = require('hapi-swagger');
const inert = require('inert');
const vision = require('vision');

const options = {
  info: {
    title: 'Test API Documentation',
  },
  grouping: 'tags',
}

module.exports = [
  inert,
  vision,
  {
    plugin: hapiSwagger,
    options,
  }
];
