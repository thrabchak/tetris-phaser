/*global module, require*/
module.exports = function (grunt) {
    'use strict';
    
    // URI paths for our tasks to use.
    grunt.uri = './';
    
    grunt.uriSrc = grunt.uri + 'src/';
    
    grunt.uriTask = grunt.uri + 'tasks/';

    // Our task object where we'll store our configuration.
    var tasks = {};
    tasks.concat = {};

    // Lint Task
    tasks = require(grunt.uriTask + 'jshint.js')(grunt, tasks);

    // Register The Tasks
    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('default', ['lint']);

    // Initialize The Grunt Configuration
    grunt.initConfig(tasks);
  };
