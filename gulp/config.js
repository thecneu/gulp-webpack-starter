var cwd = process.cwd(),
  path = require('path')
  ;

module.exports = function () {

  var basePath = cwd;
  var src = path.join(cwd, 'resources');
  var dist = path.join(cwd, 'public');
  var bowerRoot = path.join(cwd, 'bower_components');
  var nodeRoot = path.join(cwd, 'node_modules');

  var extensionGlobs = {
    fonts: '*.{ttf,woff,eof,svg,woff2,eot}',
    images: '*.{jpg,png,gif,svg}',
    videos: '*.{mp4,mov,ogv,webm}',
    sass: '*.{scss,sass,scss.liquid,sass.liquid}',
    js: '*.{js,js.liquid}',
    css: '*.{css,css.liquid}',
    svg: '*.svg',
    swf: '*.swf'
  };

  return {
    src: src,
    dist: dist,
    basePath: basePath,
    bowerRoot: bowerRoot,
    nodeRoot: nodeRoot,

    extensionGlobs: extensionGlobs,

    clean: {
      paths: [
        dist + '/**/*',
        '!' + dist + '/.htaccess',
        '!' + dist + '/favicon.ico',
        '!' + dist + '/robots.txt',
        '!' + dist + '/index.html',
        '!' + dist + '/index.php'
      ]
    },

    bower: {
      fonts: []
    },

    fonts: {
      paths: [
        src + '/fonts/**/' + extensionGlobs.fonts
      ]
    },

    svg: {
      paths: [
        src + '/svg/**/' + extensionGlobs.svg
      ]
    },

    images: {
      paths: src + '/images/**/' + extensionGlobs.images
    },

    videos: {
      paths: src + '/video/**/' + extensionGlobs.videos
    },

    sass: {
      paths: src + '/styles/**/' + extensionGlobs.sass,
      settings: {
        outputStyle: 'compressed',
        precision: 10
      },
      autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: false
      },
      clean: {
        keepSpecialComments: 0
      }
    },

    webpack: {
      paths: [
        src + '/scripts/main.js',
        src + '/scripts/vendor.js'
      ]
    },

    uglify: {
      sourceMap: false,
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      },
      output: {
        comments: false
      }
    }

  };
};
