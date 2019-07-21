const logger = require('tracer').colorConsole({
  format : "{{timestamp}} <{{title}}> {{file}}:{{line}} ({{method}}) {{message}}",
  dateformat : "isoUtcDateTime"
});

module.exports = logger;