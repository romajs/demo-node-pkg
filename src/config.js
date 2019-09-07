const convict = require('convict');
const dotenv = require('dotenv');

dotenv.config();

const config = convict({
  env: {
    format: ['production', 'development', 'test'],
    env: 'NODE_ENV',
  },
  logger: {
    level: {
      format: String,
      default: 'debug',
      env: 'LOGGER_LEVEL',
      arg: 'logger-level',
    },
    prettyPrint: {
      format: Boolean,
      default: true,
      env: 'LOGGER_PRETTY_PRINT',
      arg: 'logger-pretty-print',
    },
    useLevelLabels: {
      format: Boolean,
      default: true,
      env: 'LOGGER_LABELS',
      arg: 'logger-labels',
    },
  },
});

config.validate({ allowed: 'strict' });

module.exports = config;
