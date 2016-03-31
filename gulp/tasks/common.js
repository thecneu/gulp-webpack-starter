var gulp = require('gulp'),
    config = require('../config')(),
    browserSync = require('browser-sync'),
    gif = require('gulp-if'),
    debug = require('gulp-debug')
;

gulp.task('fonts', function() {
    return gulp.src(config.fonts.paths)
        //.pipe(gif(global.debug, debug({title: 'FOUND (font):'})))
        .pipe(gulp.dest(config.dist + '/fonts'))
    ;
});

gulp.task('images', function() {
    return gulp.src(config.images.paths)
        //.pipe(gif(global.debug, debug({title: 'FOUND (image):'})))
        .pipe(gulp.dest(config.dist + '/images'))
        .pipe(browserSync.reload({stream: true}))
    ;
});

gulp.task('bowerFonts', function() {
    return gulp.src(config.bower.fonts)
        //.pipe(gif(global.debug, debug({title: 'FOUND (bower font):'})))
        .pipe(gulp.dest(config.dist + '/fonts'))
        .pipe(browserSync.reload({stream: true}))
    ;
});

gulp.task('common', ['fonts', 'bowerFonts', 'images']);
