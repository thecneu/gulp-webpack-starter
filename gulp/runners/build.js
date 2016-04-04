var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

/**
 * Build Task: gulp build
 */
gulp.task('build', gulpSequence('build-start', 'bundle', 'webpack'));
gulp.task('build-start', function(cb) {
    global.debug = false;
    cb();
});
