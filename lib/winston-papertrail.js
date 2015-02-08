var LogSettings = Meteor.settings.logger;

if (LogSettings) {
    var Winston = Npm.require("winston");
    var Winston_Papertrail = Npm.require("winston-papertrail").Papertrail;

    log = Winston;

    log.add( Winston_Papertrail, {
        levels: {
            debug: LogSettings.levels.debug,
            info: LogSettings.levels.info,
            warn: LogSettings.levels.warn,
            error: LogSettings.levels.error,
            auth: LogSettings.levels.auth
        },
        colors: {
            debug: LogSettings.colors.debug,
            info: LogSettings.colors.info,
            warn: LogSettings.colors.warn,
            error: LogSettings.colors.error,
            auth: LogSettings.colors.auth
        },

        host: LogSettings.host,
        port: LogSettings.port,
        handleExceptions: LogSettings.handleExceptions,
        json: LogSettings.json,
        colorize: LogSettings.colorize,
        logFormat: function(level, message) {
            return level + ': ' + message;
        }
    });

    //adding test log
    log.info(" =====> Meteor App restarted "+ new Date( Date.now()) +" <=====");
} else {
    throw new Meteor.Error(404, 'Please add log settings');
}
