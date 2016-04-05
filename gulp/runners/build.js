'use strict';

import {gulp, plugins} from '../plugins';

/**
 * Build Task: gulp build
 */
gulp.task('build', plugins.sequence('bundle'));
