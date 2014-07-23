module.exports = function(grunt) {
  grunt.initConfig({
    convert: {
      yaml2json: {
        files: [{
          src: 'src/data/asciibots.yml', 
          dest: 'build/asciibots.json'
        }]
      }
    },

    concat: {
      wrapjson: {
        src: ['build/asciibots.json'],
        dest: 'build/bots.js',
        options: {
          separator: "",
          banner: "robots = ",
          footer: ";"
        }
      },
      vanilla: {
        src: ['src/vanilla-intro.js', 'build/bots.js', 'src/idhelper.js', 'src/shared.js', 'src/vanilla-outro.js'],
        dest: 'dist/asciibots.js'
      },
      jquery: {
        src: ['src/jquery-intro.js', 'build/bots.js', 'src/idhelper.js', 'src/shared.js', 'src/jquery-outro.js'],
        dest: 'dist/jquery/asciibots.js'
      }
    },

    markdown: {
      all: {
        files: [{
            src: 'src/README.md',
            dest: 'dist/readme.html'
        }]
      }
    },

    copy: {
      docs: {
        files: [{
            src: 'src/README.md',
            dest: 'README.md'
        }]
      },
      www: {
        expand: true,
        cwd: 'src/',
        src: ['index.html','demo*/*'],
        dest: 'dist/'
      }
    }, 

    jsbeautifier : {
      options: {
        js: {
          indentChar: " ",
          indentSize: 2
        }
      },
      files : ['dist/asciibots.js', 'dist/jquery/asciibots.js']
    },

    uglify: {
      vanilla: {
        files: {
          'dist/asciibots.min.js': ['dist/asciibots.js']
        }
      },
      jquery: {
        files: {
          'dist/jquery/asciibots.min.js': ['dist/jquery/asciibots.js']
        }
      }
    },

    jshint: {
      dist: ['dist/asciibots.js', 'dist/jquery/asciibots.js']
    },

    qunit: {
      all: ['test/**/*.html']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-convert');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-markdown');

  // Default task(s).
  grunt.registerTask('default', ['convert', 'concat', 'markdown', 'copy', 'jsbeautifier', 'jshint', 'qunit', 'uglify']);
  grunt.registerTask('test', ['jshint', 'qunit']);

};