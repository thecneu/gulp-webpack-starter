'use strict';

import {gulp} from '../plugins';
import Server from 'karma';
import path from 'path';

const cwd = process.cwd();

gulp.task('test', (done) => {
    new Server({
        configFile: path.join(cwd, 'karma.conf.js'),
        singleRun: true
    }, done).start();
});

gulp.task('tdd', (done) => {
    new Server({
        configFile: path.join(cwd, 'karma.conf.js')
    }, done).start();
});
