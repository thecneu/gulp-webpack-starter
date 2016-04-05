/*eslint "no-process-exit": 0*/

'use strict';

import {plugins} from '../plugins';
import notifier from 'node-notifier';
import path from 'path';

const cwd = process.cwd();
const ERROR_LEVELS = ['fatal', 'error', 'warning'];
const EXIT_LEVEL = global.fatal || 'error';

function shouldExit(level) {
    return ERROR_LEVELS.indexOf(level) <= ERROR_LEVELS.indexOf(EXIT_LEVEL);
}

function handleError(level, error) {
    plugins.util.log(plugins.util.colors.red(error.message));

    notifier.notify({
        'title': 'Gulp Error',
        'message': error.message,
        'icon': path.join(cwd, 'gulp', 'util', 'gulp.png')
    });

    if (shouldExit(level)) {
        plugins.util.log(plugins.util.colors.red('<<< Exiting'));
        process.exit(1);
    } else {
        plugins.util.log(plugins.util.colors.red('<<< Emitting end, continuing'));
        this.emit('end');
    }
}

export function onError(error) {
    handleError.call(this, 'error', error);
}

export function onWarning(warning) {
    handleError.call(this, 'warning', warning);
}
