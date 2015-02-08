meteor-winston-papertrail
===============

A wrapper around [winston-papertrail](https://github.com/kenperkins/winston-papertrail) for using [Papertrail](https://papertrailapp.com) transport with [winston](https://github.com/flatiron/winston.git) for [Meteor](http://meteor.com)

##Install
```bach
meteor add risul:winston-papertrail
```

##Configuration
Add log settings to your settings.json or METEOR_SETTINGS env variable containing all settings as JSON

```json
{
    "logger": {
            "host": "logs.papertrailapp.com",
            "port": "*****",
            "handleExceptions": true/false,
            "json": true/false,
            "colorize": true/false,
            "levels": {
                "debug": 0,
                "info": 1,
                "warn": 2,
                "error": 3,
                "auth": 4
            },
            "colors": {
                "debug": "blue",
                "info": "green",
                "warn": "red",
                "error": "red",
                "auth": "red"
            }
        }
}
```


##Use
Anywhere in your server code

``` js
log.info("Hello from my app "+ new Date( Date.now()));
```


##Documentation
See winston-papertrail [documentation](https://github.com/stuartfenton/meteor-winston-papertrail) for more details.at