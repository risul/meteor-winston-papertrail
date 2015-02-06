if (Meteor.settings.log) {
    var Winston = Npm.require("winston");
    var Winston_Papertrail = Npm.require("winston-papertrail").Papertrail;

    log = Winston;

    log.add( Winston_Papertrail, {
        levels: {
            debug: Meteor.settings.log.levels.debug,
            info: Meteor.settings.log.levels.info,
            warn: Meteor.settings.log.levels.warn,
            error: Meteor.settings.log.levels.error,
            auth: Meteor.settings.log.levels.auth
        },
        colors: {
            debug: Meteor.settings.log.colors.debug,
            info: Meteor.settings.log.colors.info,
            warn: Meteor.settings.log.colors.warn,
            error: Meteor.settings.log.colors.error,
            auth: Meteor.settings.log.colors.auth
        },

        host: Meteor.settings.log.host,
        port: Meteor.settings.log.port,
        handleExceptions: Meteor.settings.log.handleExceptions,
        json: Meteor.settings.log.json,
        colorize: Meteor.settings.log.colorize,
        logFormat: function(level, message) {
            return level + ': ' + message;
        }
    });

    //adding test log
    log.info(" =====> Meteor App restarted "+ new Date( Date.now()) +" <=====");
} else {
    throw new Meteor.Error(404, 'Please add log settings');
}
