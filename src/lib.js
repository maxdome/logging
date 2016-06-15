'use strict';

const winston = require('winston');

module.exports = (config) => (category, options) => {
  if (process.env.MXD_LOGGING_FILENAME) {
    config.logging = [
      {
        type: 'File',
        options: {
          level: process.env.MXD_LOGGING_LEVEL,
          filename: process.env.MXD_LOGGING_FILENAME
        }
      }
    ];
  }

  const logger = new winston.Logger(options);
  if (config.logging) {
    for (const transport of config.logging) {
      transport.options.label = category;
      logger.add(winston.transports[transport.type], transport.options);
    }
  }
  return logger;
};
