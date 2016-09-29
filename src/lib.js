'use strict';

const winston = require('winston');

module.exports = config => {
  if (process.env.MXD_LOGGING_FILENAME) {
    config.logging = {
      transports: [
        {
          type: 'File',
          options: { filename: process.env.MXD_LOGGING_FILENAME }
        }
      ]
    };
  } else {
    config.logging = config.logging || {};
    config.logging.transports = config.logging.transports || [];
  }
  if (process.env.MXD_LOGGING_LEVEL) {
    for (const transport of config.logging.transports) {
      transport.options = transport.options || {};
      transport.options.level = process.env.MXD_LOGGING_LEVEL;
    }
  }
  return (category, options) => {
    const logger = new winston.Logger(options);
    for (const transport of config.logging.transports) {
      logger.add(
        winston.transports[transport.type],
        Object.assign({}, transport.options, { label: category })
      );
    }
    return logger;
  }
};
