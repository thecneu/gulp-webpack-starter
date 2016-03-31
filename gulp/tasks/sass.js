var gulp = require('gulp'),
    config = require('../config')(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    handleErrors = require('../util/handleErrors'),
    gif = require('gulp-if'),
    debug = require('gulp-debug'),
    cleanCSS = require('gulp-clean-css')
;

gulp.task('sass', function() {
    gulp.src(config.sass.paths)
        //.pipe(gif(global.debug, debug({title: 'FOUND (sass):'})))
        .pipe(sourcemaps.init())
        .pipe(sass(config.sass.settings).on('error', handleErrors))
        .pipe(autoprefixer(config.sass.autoprefixer))
        .pipe(gif(global.debug, sourcemaps.write('.')))
        .pipe(gif(!global.debug, cleanCSS(config.sass.clean)))
        .pipe(gulp.dest(config.dist + '/styles'))
        .on('error', handleErrors)
    ;
});
