'use strict';

const winston = require('winston');

module.exports = (config) => (category, options) => {
  if (process.env.MXD_LOGGING_FILENAME) {
    config.logging = {
      transports: [
        {
          type: 'File',
          options: {
            level: process.env.MXD_LOGGING_LEVEL,
            filename: process.env.MXD_LOGGING_FILENAME
          }
        }
      ]
    };
  }

  const logger = new winston.Logger(options);
  if (config.logging && config.logging.transports) {
    for (const transport of config.logging.transports) {
      logger.add(
        winston.transports[transport.type],
        Object.assign({}, transport.options, { label: category })
      );
    }
  }
  return logger;
};
