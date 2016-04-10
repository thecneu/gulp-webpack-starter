'use strict';

import {gulp, plugins, config} from '../plugins';

gulp.task('views', () => {
    return gulp.src(config.views.paths)
        .pipe(plugins.gif(config.debugPaths, plugins.debug({title: 'FOUND (view):'})))
        .pipe(gulp.dest(config.dist))
        .pipe(plugins.browserSync.stream({reload: true}));
});

gulp.task('fonts', () => {
    return gulp.src(config.fonts.paths)
        .pipe(plugins.gif(config.debugPaths, plugins.debug({title: 'FOUND (font):'})))
        .pipe(gulp.dest(config.dist + '/fonts'))
        .pipe(plugins.browserSync.stream({reload: true}));
});

gulp.task('images', () => {
    return gulp.src(config.images.paths)
        .pipe(plugins.gif(config.debugPaths, plugins.debug({title: 'FOUND (image):'})))
        .pipe(gulp.dest(config.dist + '/images'))
        .pipe(plugins.browserSync.stream({reload: true}));
});

gulp.task('bowerFonts', () => {
    return gulp.src(config.bower.fonts)
        .pipe(plugins.gif(config.debugPaths, plugins.debug({title: 'FOUND (bower font):'})))
        .pipe(gulp.dest(config.dist + '/fonts'))
        .pipe(plugins.browserSync.stream({reload: true}));
});

gulp.task('common', ['views', 'fonts', 'bowerFonts', 'images']);
