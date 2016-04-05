'use strict';

import {gulp, plugins, config} from '../plugins';

/**
 * Watch Task: gulp watch
 */
gulp.task('watch', plugins.sequence('bundle', 'watch-start'));

gulp.task('watch-start', (done) => {
    plugins.util.log(plugins.util.colors.bgGreen('Watching for changes...'));
    plugins.browserSync.init(config.browserSync);

    plugins.watch(config.dist + '/index.html', (cb) => {
        plugins.browserSync.reload();
        cb();
    });

    plugins.watch(config.src + '/scripts/**/' + config.extensionGlobs.js, () => {
        return gulp.start('webpack');
    });

    plugins.watch(config.src + '/fonts/' + config.extensionGlobs.fonts, () => {
        return gulp.start('fonts');
    });

    plugins.watch(config.src + '/images/' + config.extensionGlobs.images, () => {
        return gulp.start('images');
    });

    plugins.watch(config.src + '/styles/' + config.extensionGlobs.sass, () => {
        return gulp.start('sass');
    });

    done();
});
