var gulp = require('gulp'),
    config = require('../config')(),
    gutil = require('gulp-util'),
    gulpSequence = require('gulp-sequence'),
    watch = require('gulp-watch')
;

/**
 * Watch Task: gulp watch
 */
gulp.task('watch', gulpSequence('bundle', 'watch-start', 'watch-setup', 'webpack'));
gulp.task('watch-start', function(cb) {
    global.isWatch = true;
    global.debug = true;
    cb();
});

gulp.task('watch-setup', function(cb) {
    gutil.log(gutil.colors.bgGreen('Watching for changes...'));

    gulp.watch(config.src + '/fonts/' + config.extensionGlobs.fonts, ['fonts'], {interval: 600});
    gulp.watch(config.src + '/images/' + config.extensionGlobs.images, ['images'], {interval: 600});
    gulp.watch(config.src + '/styles/' + config.extensionGlobs.sass, ['sass'], {interval: 600});

    cb();
});
