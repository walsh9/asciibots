module.exports = function(grunt) {
  grunt.initConfig({
    convert: {
      yaml2json: {
        files: [{
          src: 'src/data/asciibots.yml', 
          dest: 'src/asciibots.json'
        }]
      }
    },
    concat: {
      vanilla: {
        src: ['src/vanilla-intro.js', 'src/asciibots.json', 'src/shared.js', 'src/vanilla-outro.js'],
        dest: 'dist/asciibots.js',
      }
    }
  });
  


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-convert');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['convert', 'concat']);

};