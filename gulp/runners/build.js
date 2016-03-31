var gulp = require('gulp'),
    config = require('../config')(),
    gutil = require('gulp-util'),
    gulpSequence = require('gulp-sequence')
;

/**
 * Build Task: gulp build
 */
gulp.task('build', gulpSequence('build-start', 'bundle', 'webpack'));
gulp.task('build-start', function(cb) {
    global.debug = false;
    cb();
});
