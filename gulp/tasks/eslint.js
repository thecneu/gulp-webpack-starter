var gulp = require('gulp'),
    config = require('../config')(),
    eslint = require('gulp-eslint'),
    gif = require('gulp-if'),
    handleErrors = require('../util/handleErrors');

gulp.task('eslint', function() {
    return gulp.src(config.eslint.paths)
        .pipe(eslint())
        .pipe(eslint.formatEach('stylish', process.stderr))
        .pipe(gif(!global.debug, eslint.failOnError()))
        .on('error', handleErrors);
});
