import _gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import _config from './config';

export const gulp = _gulp;

export const config = _config();

export const plugins = gulpLoadPlugins({
    DEBUG: false,
    camelize: true,
    lazy: true,
    // Add any other plugins that are not 'gulp-' but desired to be loaded in the plugins object
    pattern: ['gulp-*', 'gulp.*', 'del', 'browser-sync', 'vinyl-*', 'webpack-stream'],
    rename: {
        'gulp-if': 'gif'
    }
});
