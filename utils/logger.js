const logger = require('tracer').colorConsole({
  format : "{{timestamp}} <{{title}}> {{file}}:{{line}} ({{method}}) {{message}}",
  dateformat : "isoUtcDateTime"
});

logger.log('test');
module.exports = logger;