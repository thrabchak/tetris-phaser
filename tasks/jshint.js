/*global module*/

module.exports = function (grunt, tasks) {
<<<<<<< HEAD
    'use strict';
    
    // Load our node module required for this task.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // The configuration for a specific task.
    tasks.jshint = {
        // The files that we want to check.
        dist: {
            src: [
                grunt.uriGame + '*.js', // Include all JS files in this directory.
                '!' + grunt.uriGame + '*.min.js' // Exclude any files ending with `.min.js`
            ]
        }
    };

    return tasks;
};
=======
  'use strict';
  
  // Load our node module required for this task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // The configuration for a specific task.
  tasks.jshint = {
    // The files that we want to check.
    dist: {
      src: [
        grunt.uriGame + '*.js', // Include all JS files in this directory.
        '!' + grunt.uriGame + '*.min.js' // Exclude any files ending with `.min.js`
      ]
    }
  };

  return tasks;
};
>>>>>>> d8d1d4f4932b985530f33c4ab6eb17e69f28b42e
