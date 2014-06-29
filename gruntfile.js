module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    my_project: {
      src: 'source',
      assets: 'assets',
      css: ['<%= my_project.src %>/css/style.styl', '<%= my_project.src %>/css/layout.styl'],
      js: ['<%= my_project.src %>/js/*.js']
    },
    my_tag: {
      banner: '/*!\n' +
        ' * <%= pkg.author %>\n' +
        ' * <%= pkg.title %>\n' +
        ' * <%= pkg.url %>\n' +
        ' * @author <%= pkg.author %>\n' +
        ' * @version <%= pkg.version %>\n' +
        ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
        ' */\n'
    },
    stylus: {
      compile: {
        options: {
          compress: false,
          banner: '<%= my_tag.banner %>'
        },
        files: {
          '<%= my_project.assets %>/css/style.min.css': '<%= my_project.css %>'
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:4000'
      }
    },
    concurrent: {
      target1: {
        tasks: ['exec:serve', 'watch'],
        options: {
            logConcurrentOutput: true
        }
      }
    },
    exec: {
      serve: {
        cmd: 'jekyll serve --watch'
      }
    },
    watch: {
      stylus: {
        files: '<%= my_project.src %>/css/**/*.styl',
        tasks: ['stylus']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '_config.yml',
          '**/*.{html,markdown}',
          '<%= project.assets %>/js/**/*.js',
          '<%= project.assets %>/**/*.{png,jpg,jpeg,gif,webp,svg,css}'
        ]
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['stylus', 'concurrent:target1', 'open']);
};
