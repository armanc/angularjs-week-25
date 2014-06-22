     module.exports = function(grunt) {
         
         grunt.initConfig({
             wiredep: {
                app: {
                  src: 'index.html' // point to your HTML file.
                }
              },

              watch: {
                    jshint: {
                        files: 'js/**.js',
                        tasks: 'jshint'
                    }
                },
              jshint: {
                // define the files to lint
                files: ['gruntfile.js', 'js/**.js'],
                // configure JSHint (documented at http://www.jshint.com/docs/)
                options: {
                    // more options here if you want to override JSHint defaults
                  globals: {
                    jQuery: true,
                    console: true,
                    module: true
                  }
                }
              },
              uglify: {
              
              },

         });
         grunt.loadNpmTasks('grunt-wiredep');
         grunt.loadNpmTasks('grunt-contrib-uglify');
         grunt.loadNpmTasks('grunt-contrib-jshint');
         grunt.loadNpmTasks('grunt-contrib-watch');
         
            
         grunt.registerTask('default', ['jshint', 'uglify']);
         grunt.registerTask('delta', ['watch']);
         grunt.registerTask('hint', ['jshint']);
         grunt.registerTask('x', ['wiredep']);
         
     };
