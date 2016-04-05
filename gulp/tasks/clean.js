'use strict';

import {gulp, plugins, config} from '../plugins';

gulp.task('clean', (done) => {
    plugins.del.sync(config.clean.paths);
    done();
});
