'use strict';

import {gulp, plugins, config} from '../plugins';
import {onError} from '../util/errorHandler';
import _webpackConfig from '../../webpack.config.babel.js';
import through from 'through2';

const webpackConfig = _webpackConfig(config);

gulp.task('webpack', ['eslint'], () => {

    return gulp.src(config.webpack.paths)
        .pipe(plugins.gif(config.debugPaths, plugins.debug({title: 'FOUND (js):'})))
        .pipe(plugins.debug({title: 'Bundling:'}))
        .pipe(plugins.vinylNamed())
        .pipe(plugins.webpackStream(webpackConfig))
        .on('error', onError)
        .pipe(plugins.sourcemaps.init({loadMaps: true}))
        .pipe(through.obj(function(file, enc, cb) {
            // Dont pipe through any source map files as it will be handled
            // by gulp-sourcemaps
            var isSourceMap = /\.map$/.test(file.path);
            if (!isSourceMap) this.push(file);
            cb();
        }))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(config.dist + '/scripts'))
        .pipe(plugins.browserSync.stream({reload: true}))
    ;
});
