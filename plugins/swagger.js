const hapiSwagger = require('hapi-swagger');
const inert = require('inert');
const vision = require('vision');

const options = {
  pathPrefixSize: 2
}

module.exports = [
  inert,
  vision,
  {
  plugin: hapiSwagger,
  options, 
  }
];
