module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: {
      options: {
        // point all tasks to karma config file
        configFile: 'test/karma.conf.js'
      },
      unit: {
        // run tests once instead of continuously
        singleRun: false
      },
    },

    protractor: {
      options: {
        // Location of your protractor config file
        configFile: "test/e2e/conf.js",

        // Do you want the output to use fun colors?
        noColor: false,

        // Set to true if you would like to use the Protractor command line debugging tool
        // debug: true,

        // Additional arguments that are passed to the webdriver command
        args: { }
      },
      e2e: {
        options: {
        }
      },
    },

    express: {
      options: {
        port:3000,
        script: 'server.js'
      },
      run: {
      }
    },

    protractor_webdriver: {
      start: {
        options: {
          path: 'node_modules/protractor/bin/',
          command: 'webdriver-manager start'
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');


  grunt.registerTask('test', ['unit', 'e2e']);
  grunt.registerTask('unit', ['karma']);
  grunt.registerTask('e2e', ['express', 'protractor_webdriver', 'protractor']);
};
