/*global module*/

module.exports = function (grunt, tasks) {
<<<<<<< HEAD
    'use strict';
    
    // Load our node module required for this task.
    grunt.loadNpmTasks('grunt-html');

    // The configuration for a specific task.
    tasks.htmllint = {
        // The files that we want to check.
        dist: {
            options: {
                path: false,
                reportpath: false // Turns logging to a file off, output will show in the CLI.
            },

            // The files that we want to check.
            src: [
                grunt.uriWww + '*.html', // Include all HTML files in this directory.
                '!' + grunt.uriWww + '*.min.html' // Exclude any files ending with `.min.html`
            ]
        }
    };

    return tasks;
};
=======
  'use strict';

  // Load our node module required for this task.
  grunt.loadNpmTasks('grunt-html');

  // The configuration for a specific task.
  tasks.htmllint = {
    // The files that we want to check.
    dist: {
    options: {
      path: false,
      reportpath: false // Turns logging to a file off, output will show in the CLI.
    },

    // The files that we want to check.
    src: [
      grunt.uriWww + '*.html', // Include all HTML files in this directory.
      '!' + grunt.uriWww + '*.min.html' // Exclude any files ending with `.min.html`
      ]
    }
  };

  return tasks;
};
>>>>>>> d8d1d4f4932b985530f33c4ab6eb17e69f28b42e
