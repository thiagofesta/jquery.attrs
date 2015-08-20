module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    buildtag: '-dev-' + grunt.template.today('yyyy-mm-dd'),
    meta: {
      banner: '/**\n' +
        ' * <%= pkg.description %>\n' +
        ' * @version v<%= pkg.version %><%= buildtag %>\n' +
        ' * @link <%= pkg.homepage %>\n' +
        ' * @author <%= pkg.authors.join(",") %>\n' +
        ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
        ' */\n'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      metatags: [
        'Gruntfile.js',
        'src/*.js'
      ],
      unit: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/unit/{,*/}*.js']
      }
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      build: {
        files: {
          'release/jquery.attrs.min.js': ['src/jquery.attrs.js']
        }
      }
    },

    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      build: {
        src: ['src/jquery.attrs.js'],
        dest: 'release/jquery.attrs.js'
      }
    }

  });

  grunt.registerTask('build', [
    'test',
    'concat:build',
    'uglify:build'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'karma'
  ]);

  grunt.registerTask('test:jshint', [
    'jshint'
  ]);

  grunt.registerTask('test:unit', [
    'karma'
  ]);

};
