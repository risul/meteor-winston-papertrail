Package.describe({
    name: 'risul:winston-papertrail',
    summary: 'Latest Winston Papertrail transport for Meteor',
    version: '1.0.1_1',
    git: 'https://github.com/risul/meteor-winston-papertrail'
});

Npm.depends({
    "winston": "0.9.0",
    "winston-papertrail": "1.0.1"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.export('log');
    api.addFiles('lib/winston-papertrail.js', 'server');
});