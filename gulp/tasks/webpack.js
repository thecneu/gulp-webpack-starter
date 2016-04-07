'use strict';

import {gulp, plugins, config} from '../plugins';
import {onError} from '../util/errorHandler';
import _webpackConfig from '../../webpack.config.js';

const webpackConfig = _webpackConfig(config);

gulp.task('webpack', ['eslint'], () => {

    return gulp.src(config.webpack.paths)
        .pipe(plugins.gif(config.debugPaths, plugins.debug({title: 'FOUND (js):'})))
        .pipe(plugins.debug({title: 'Bundling:'}))
        .pipe(plugins.vinylNamed())
        .pipe(plugins.webpackStream(webpackConfig))
        .on('error', onError)
        .pipe(gulp.dest(config.dist + '/scripts'))
        .pipe(plugins.browserSync.stream({reload: true}))
    ;
});
