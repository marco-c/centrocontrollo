var winston = require('winston');

function getLogger(module) {
    var path = module.filename.split('/').slice(-2).join('/'); //using filename in log statements
    
    return new winston.Logger({
        transports : [
            new winston.transports.Console({
                colorize:   true,
                //level:      'debug',
                label:      path
            }),
            new winston.transports.File({
                filename: './node.log'
            })
        ]
    });
}

module.exports = getLogger;
