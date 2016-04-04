var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

/**
 * Bundle Task: gulp bundle
 */
gulp.task('bundle', gulpSequence('clean', ['common', 'sass', 'webpack']));
