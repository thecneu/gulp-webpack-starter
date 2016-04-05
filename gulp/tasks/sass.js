'use strict';

import {gulp, plugins, config} from '../plugins';
import {onError} from '../util/errorHandler';

gulp.task('sass', () => {
    gulp.src(config.sass.paths)
        .pipe(plugins.gif(config.debugPaths, plugins.debug({title: 'FOUND (sass):'})))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass(config.sass.settings))
        .on('error', onError)
        .pipe(plugins.autoprefixer(config.sass.autoprefixer))
        .pipe(plugins.gif(global.debug, plugins.sourcemaps.write('.')))
        .pipe(plugins.gif(!global.debug, plugins.cleanCss(config.sass.clean)))
        .pipe(gulp.dest(config.dist + '/styles'))
        .pipe(plugins.browserSync.stream({reload: true}))
    ;
});
