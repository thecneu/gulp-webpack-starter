var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpSequence = require('gulp-sequence')
;

/**
 * Bundle Task: gulp bundle
 */
gulp.task('bundle', gulpSequence('clean', ['common', 'sass']));
