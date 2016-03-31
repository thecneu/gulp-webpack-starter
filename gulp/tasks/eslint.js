var gulp = require('gulp'),
    config = require('../config')(),
    eslint = require('gulp-eslint'),
    gif = require('gulp-if'),
    handleErrors = require('../util/handleErrors')
;

var lintStream = function(src) {
    return gulp.src(src)
        .pipe(eslint())
        .pipe(eslint.formatEach('stylish', process.stderr))
        .pipe(gif(!global.debug, eslint.failOnError()))
        .on('error', handleErrors);
};

gulp.task('eslint', function() {
    return lintStream([config.js.paths, 'gulpfile.js', './gulp/**/*.js']);
});

module.exports = {
    lintStream: lintStream
};
