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

    // Lint Tasks
    tasks = require(grunt.uriTask + 'csslint.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'htmllint.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'jshint.js')(grunt, tasks);

    // Register The Tasks
    grunt.registerTask('lint', ['csslint', 'htmllint', 'jshint']);
    grunt.registerTask('default', ['lint', 'concat', 'minify']);

    // Initialize The Grunt Configuration
    grunt.initConfig(tasks);
};
