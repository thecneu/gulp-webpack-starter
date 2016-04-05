'use strict';

import {gulp, plugins, config} from '../plugins';

/**
 * Watch Task: gulp watch
 */
gulp.task('watch', plugins.sequence('bundle', 'watch-start'));

gulp.task('watch-start', (done) => {
    plugins.util.log(plugins.util.colors.bgGreen('Watching for changes...'));
    plugins.browserSync.init(config.browserSync);

    gulp.watch(config.dist + '/index.html', plugins.browserSync.reload);
    gulp.watch(config.src + '/scripts/' + config.extensionGlobs.js, ['webpack'], {interval: 500});
    gulp.watch(config.src + '/fonts/' + config.extensionGlobs.fonts, ['fonts'], {interval: 500});
    gulp.watch(config.src + '/images/' + config.extensionGlobs.images, ['images'], {interval: 500});
    gulp.watch(config.src + '/styles/' + config.extensionGlobs.sass, ['sass'], {interval: 500});

    done();
});
