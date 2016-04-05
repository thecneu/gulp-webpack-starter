'use strict';

import {gulp, plugins} from '../plugins';

/**
 * Bundle Task: gulp bundle
 */
gulp.task('bundle', plugins.sequence('clean', ['common', 'sass', 'webpack']));
