var gulp = require('gulp'),
    config = require('../config')(),
    gutil = require('gulp-util'),
    gulpSequence = require('gulp-sequence')
;

/**
 * Default Task: gulp
 */
gulp.task('default', gulpSequence('default-start', 'bundle', 'webpack'));
gulp.task('default-start', function(cb) {
    global.debug = true;
    cb();
});
