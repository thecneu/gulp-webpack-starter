# Gulp Webpack Starter

## 

Basic opinionated gulp webpack starter. Webpack can be run solo, but some people like using gulp, and like having other tasks that webpack does not accomplish in their builds. I like gulp.

TODO:

Fix Browsersync
Fix Eslint

## Gulp

Gulp requires some system configuration:

Install NPM, if on a Mac you can use the [NPM installer](https://nodejs.org/en/), preferable to download the LTS
version 4.3.X, but one can experiment with 5.0+. This can also be installed with [Homebrew](http://brew.sh/) then
`brew install node`.

Install some global NPM packages:

```
npm install -g gulp
npm install -g bower
npm install -g eslint
```

Then you can install the Gulp packages local to this project, from the root of the project (near the `gulpfile.js`) run:

```
npm install
bower install
```

Then you can run Gulp Tasks.

Run with:

```
gulp <TASK>
```

Where the Gulp Tasks are:

| Task  | Description |
|---|---|
| default | The default gulp task, will run `default-start` then `bundle` |
| build | The production level gulp task, will run `build-start` then bundle |
| bundle | Comprises all of the partial tasks below that are included in the `bundling` process |
| watch | Starts gulp watch, which will rerun gulp tasks on changes to files |
| clean | Cleans the public directory before a new bundle |
| default-start | Configures some global variables for gulp that determine that the build is a `debug` build where the output includes sourcemaps and skips certain production level processes |
| build-start | Configures some global variables for gulp that determine that the build is a `production` level build, where the output does not include sourcemaps and runs some production level processes |
| watch-start | Configures some global variables for gulp that determine that the build is a `watch` level build that also includes sourcemaps |
| eslint | Runs `eslint` javascript syntax and code style tester |
| bowerFonts | Copies fonts from bowerFonts array in config to `public/fonts` |
| fonts | Copies `resources/fonts` to `public/fonts` |
| images | Copies `resources/images` to `public/images` |
| sass | Runs SCSS compiling on the SCSS assets in `resources/styles` where the file is not prefixed by `_` |
| webpack | Runs webpack bundling on `main.js` and `vendor.js` in `resources/scripts` |

## Primary Gulp tasks

The gulp tasks have two kinds, ones that are destined to be run locally (or on DEV) and those that should be run on production (QA, STG or PRD).

There are various things that are changed when running in each of these modes.

Primary examples of which are:

* Whether to minify and mangle JS
* Whether to include sourcemaps for the minfied or mangled Javascript
* Whether to include sourcemaps for the compiled CSS
* Whether to fail and exit on error of ESLINT (used in production builds)

There are other aspects of the gulp run that are changed by global variables.

The differences are defined via the global variables in the gulp files:

```
global.debug
```

You can run a search in the folder to find the uses of these variables.

### Build

To build a package for a production one would use the `gulp build` task. 

### Default

Runs a local bundle and defines several gulp runtime configurations for local development.