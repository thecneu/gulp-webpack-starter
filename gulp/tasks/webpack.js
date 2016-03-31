var gulp = require('gulp'),
    config = require('../config')(),
    webpackStream = require('webpack-stream'),
    named = require('vinyl-named'),
    gif = require('gulp-if'),
    debug = require('gulp-debug')
;

gulp.task('webpack', function() {
    var webpackConfig = require('../webpack.config.js')(config);

    return gulp.src(config.webpack.paths)
        //.pipe(gif(global.debug, debug({title: 'FOUND (js):'})))
        .pipe(debug({title: 'Bundling:'}))
        .pipe(named())
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest(config.dist + '/scripts'))
    ;
});
