var gulp = require('gulp'),
    config = require('../config')(),
    del = require('del');

gulp.task('clean', function(cb) {
    del.sync(config.clean.paths);
    cb();
});
