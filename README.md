# Example

```
const logging = require('mxd-logging')(config);
const appLogger = logging('app');
```

# Config

## Environment Variables

If environment variables are set, the config object will be ignored!

* MXD_LOGGING_FILENAME: The path for the logfile
* MXD_LOGGING_LEVEL: The loglevel (optional, default: 'info')

## 'config' Object

For available types and their options, see: https://github.com/winstonjs/winston/blob/master/docs/transports.md
 
```
{
  "logging": {
    "transports": [
      { 
        "type": "",
        "options": {}
      }
    ]
  }
}
```
