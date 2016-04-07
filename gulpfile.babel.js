import yargs from 'yargs';

let argv = yargs.describe('Gulp Tasks')
    .usage('Usage: $0 --fatal=[warn|error|fatal|off]')
    .alias('fatal', 'The log level to exit a build on')
    .help('h')
    .alias('h', 'help')
    .argv;

// Setup some globals
if (argv._.indexOf('build') != -1) {
    global.debug = false;
    global.fatal = argv.fatal ? argv.fatal : 'warning';
} else if (argv._.indexOf('watch') != -1) {
    global.debug = true;
    global.fatal = argv.fatal ? argv.fatal : 'off';
    global.watch = true;
} else {
    global.debug = true;
    global.fatal = argv.fatal ? argv.fatal : 'off';
}

// Require all tasks in gulp, including subfolders
require('require-dir')('./gulp', {recurse: true});
