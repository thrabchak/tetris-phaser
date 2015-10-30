/*global module*/

module.exports = function (grunt, tasks) {
<<<<<<< HEAD
    'use strict';
    
    // Load our node module required for this task.
    grunt.loadNpmTasks('grunt-contrib-csslint');

    // The configuration for a specific task.
    tasks.csslint = {
        // The files that we want to check.
        dist: {
            src: [
                grunt.uriWww + '*.css', // Include all CSS files in this directory.
                grunt.uriWww + '!*.min.css' // Exclude any files ending with `.min.css`
            ]
        }
    };

    return tasks;
};
=======
  'use strict';

  // Load our node module required for this task.
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // The configuration for a specific task.
  tasks.csslint = {
    // The files that we want to check.
    dist: {
      src: [
        grunt.uriWww + '*.css', // Include all CSS files in this directory.
        grunt.uriWww + '!*.min.css' // Exclude any files ending with `.min.css`
      ]
    }
  };

  return tasks;
};
>>>>>>> d8d1d4f4932b985530f33c4ab6eb17e69f28b42e
