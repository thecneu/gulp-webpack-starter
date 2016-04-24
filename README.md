# Gulp Webpack Starter

## 

Basic gulp webpack starter. Webpack can be run solo, but some people like using gulp, and like having other tasks that webpack does not accomplish in their builds.

I am not fully invested in Webpack yet as the sole bundler/loader. I like to leave some tasks accomplished with Gulp and let Webpack be used mainly for its loader and bundler.

**Features:**

* Webpack to bundle main/vendor js and browser components
* Use ES6 with Babel
* SCSS Compilation, can be both inside Webpack bundle using sass-loader, and outside (for reset and critical CSS) if desired
* ESLint for JS syntax and style
* Bower integration
* Static Asset copy via "common" task (when not coming from inside Webpack)

## Requirements
 * Node & NPM
 * Gulp
 * Bower
 * ESLint

Install some global NPM packages:

```
npm install -g gulp bower eslint webpack
```

Then you can install the Gulp packages local to this project, from the root of the project (near the `gulpfile.js`) run:

```
npm install && bower install
```

The Gulp Tasks are:

| Task  | Description |
|---|---|
| default | The default gulp task, will run `bundle` |
| build | The production level gulp task, will run `bundle` |
| bundle | Comprises all of the partial tasks below that are included in the `bundling` process |
| watch | Starts gulp watch, which will rerun gulp tasks on changes to files |
| clean | Cleans the public directory before a new bundle |
| watch-start | Configures some global variables for gulp that determine that the build is a `watch` level build that also includes sourcemaps |
| eslint | Runs `eslint` javascript syntax and code style tester |
| bowerFonts | Copies fonts from bowerFonts array in config to `public/fonts` |
| fonts | Copies `resources/fonts` to `public/fonts` |
| images | Copies `resources/images` to `public/images` |
| sass | Runs SCSS compiling on the SCSS assets in `resources/styles` where the file is not prefixed by `_` |
| webpack | Runs webpack bundling on `main.js` and `vendor.js` in `resources/scripts` |

## Primary Gulp tasks

There are various things that are changed when running in each of these modes.

Primary examples of which are:

* Minifying and mangling JS
* Generating sourcemaps for the processed Javascript
* Including sourcemaps for the compiled CSS
* Behavior on error of ESLINT (used in production builds)

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
