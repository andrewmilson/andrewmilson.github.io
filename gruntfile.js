module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    my_project: {
      src: 'source',
      assets: 'assets',
      stylus: ['<%= my_project.src %>/css/style.styl', '<%= my_project.src %>/css/layout.styl'],
      css: '<%= my_project.assets %>/css/**/*.css',
      css_banner: '/*!\n' +
        ' * <%= pkg.author %>\n' +
        ' * <%= pkg.title %>\n' +
        ' * <%= pkg.url %>\n' +
        ' * @author <%= pkg.author %>\n' +
        ' * @version <%= pkg.version %>\n' +
        ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
        ' */\n',
      js: ['<%= my_project.src %>/js/*.js']
    },
    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          '<%= my_project.assets %>/css/style.min.css': '<%= my_project.stylus %>'
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
    cssmin: {
      add_banner: {
        options: {
          banner: '<%= my_project.css_banner %>'
        },
        files: {
          '<%= my_project.assets %>/css/main.min.css': ['<%= my_project.css %>']
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
        tasks: ['stylus', 'cssmin']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '_config.yml',
          '**/*.{html,markdown}',
          '<%= my_project.assets %>/js/**/*.js',
          '<%= my_project.assets %>/**/*.{png,jpg,jpeg,gif,webp,svg,css}'
        ]
      }
    }
  });

  grunt.registerTask("build", ["stylus"])

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['stylus', 'cssmin', 'concurrent:target1', 'open']);
};
