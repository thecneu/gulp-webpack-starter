'use strict';

import {gulp, plugins} from '../plugins';

/**
 * Default Task: gulp
 */
gulp.task('default', plugins.sequence('bundle'));
