var gulp = require('gulp'),
    config = require('../config')(),
    gutil = require('gulp-util'),
    gulpSequence = require('gulp-sequence'),
    browserSync = require('browser-sync');

/**
 * Watch Task: gulp watch
 */
gulp.task('watch', gulpSequence('watch-setup', 'bundle', 'watch-start'));
gulp.task('watch-setup', function(cb) {
    global.watch = true;
    global.debug = true;
    cb();
});

gulp.task('watch-start', function(cb) {
    gutil.log(gutil.colors.bgGreen('Watching for changes...'));
    browserSync.init(config.browserSync);

    gulp.watch(config.dist + '/index.html', browserSync.reload);
    gulp.watch(config.src + '/scripts/' + config.extensionGlobs.js, ['webpack'], {interval: 500});
    gulp.watch(config.src + '/fonts/' + config.extensionGlobs.fonts, ['fonts'], {interval: 500});
    gulp.watch(config.src + '/images/' + config.extensionGlobs.images, ['images'], {interval: 500});
    gulp.watch(config.src + '/styles/' + config.extensionGlobs.sass, ['sass'], {interval: 500});

    cb();
});
