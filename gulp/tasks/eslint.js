'use strict';

import {gulp, plugins, config} from '../plugins';
import {onError} from '../util/errorHandler';

gulp.task('eslint', () => {
    return gulp.src(config.eslint.paths)
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.formatEach('stylish', process.stderr))
        .pipe(plugins.eslint.failAfterError())
        .on('error', onError);
});
