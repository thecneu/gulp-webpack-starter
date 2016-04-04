var gulp = require('gulp'),
    config = require('../config')(),
    browserSync = require('browser-sync'),
    gif = require('gulp-if'),
    debug = require('gulp-debug');

gulp.task('fonts', function() {
    return gulp.src(config.fonts.paths)
        .pipe(gif(config.debugPaths, debug({title: 'FOUND (font):'})))
        .pipe(gulp.dest(config.dist + '/fonts'))
        .pipe(browserSync.stream({reload: true}))
    ;
});

gulp.task('images', function() {
    return gulp.src(config.images.paths)
        .pipe(gif(config.debugPaths, debug({title: 'FOUND (image):'})))
        .pipe(gulp.dest(config.dist + '/images'))
        .pipe(browserSync.stream({reload: true}))
    ;
});

gulp.task('bowerFonts', function() {
    return gulp.src(config.bower.fonts)
        .pipe(gif(config.debugPaths, debug({title: 'FOUND (bower font):'})))
        .pipe(gulp.dest(config.dist + '/fonts'))
        .pipe(browserSync.stream({reload: true}))
    ;
});

gulp.task('common', ['fonts', 'bowerFonts', 'images']);
