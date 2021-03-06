module.exports = ->
  @initConfig
    package: @file.readJSON('package.json')

    grunt: @

    banner: """
      /*! <%= package.name %> - v<%= package.version %> - <%= grunt.template.today('yyyy-mm-dd') %> \
      **  https://<%= package.homepage %> \
      **  Copyright (c) <%= grunt.template.today('yyyy') %> <%= package.author %>; Licensed under <%= package.license %> license. */\

      """

    convert:
      yaml2json:
        src: ['src/data/asciibots.yml']
        dest: 'build/asciibots.json'

    concat:
      wrapjson:
        src: ['build/asciibots.json']
        dest: 'build/bots.js'
        options:
          separator: ""
          banner: "robots = "
          footer: ";"
      vanilla:
        src: ['src/vanilla-intro.js', 'build/bots.js', 'src/idhelper.js', 'src/shared.js', 'src/vanilla-outro.js']
        dest: 'dist/asciibots.js'
        options:
          banner: "<%= banner %>"
      jquery:
        src: ['src/jquery-intro.js', 'build/bots.js', 'src/idhelper.js', 'src/shared.js', 'src/jquery-outro.js']
        dest: 'dist/jquery/asciibots.js'
        options:
          banner: "<%= banner %>"

    jsbeautifier:
      files: ['dist/asciibots.js', 'dist/jquery/asciibots.js']
      options:
        js: 
          indentChar: " "
          indentSize: 4

    jshint:
      dist: ['dist/asciibots.js', 'dist/jquery/asciibots.js']

    qunit:
      all: ['test/**/*.html']

    uglify:
      vanilla:
        files: 'dist/asciibots.min.js': ['dist/asciibots.js']
      jquery:
        files: 'dist/jquery/asciibots.min.js': ['dist/jquery/asciibots.js']

    copy:
      www:
        expand: true
        cwd: 'src/www/'
        src: ['**/*']
        dest: 'www/'
      js:
        expand: true
        cwd: 'dist/'
        src: ['asciibots.js', 'jquery/asciibots.js']
        dest: 'www/js/'

    compress:
      vanilla:
        expand: true
        cwd: 'dist'
        src: ['asciibots.*']
        dest: '/'
        options:
          archive: 'www/dl/asciibots.zip'
      jquery:
        expand: true,
        cwd: 'dist/jquery'
        src: ['asciibots.*']
        dest: '/'
        options:
          archive: 'www/dl/jquery/asciibots.zip'
  
    'gh-pages':
      options:
        base: 'www'
      src: ['**/*']

  # Load Grunt task plugins.
  @loadNpmTasks 'grunt-contrib-concat'
  @loadNpmTasks 'grunt-contrib-compress'
  @loadNpmTasks 'grunt-contrib-copy'
  @loadNpmTasks 'grunt-contrib-jshint'
  @loadNpmTasks 'grunt-contrib-qunit'
  @loadNpmTasks 'grunt-contrib-uglify'
  @loadNpmTasks 'grunt-convert'
  @loadNpmTasks 'grunt-gh-pages'
  @loadNpmTasks 'grunt-jsbeautifier'

  # Default task.
  @registerTask 'default', ['convert', 'concat', 'jsbeautifier', 'jshint', 'qunit', 'uglify', 'copy', 'compress']
  @registerTask 'test', ['jshint', 'qunit']
  @registerTask 'publish', ['gh-pages']
